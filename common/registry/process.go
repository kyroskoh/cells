/*
 * Copyright (c) 2018. Abstrium SAS <team (at) pydio.com>
 * This file is part of Pydio Cells.
 *
 * Pydio Cells is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio Cells is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio Cells.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

// Package registry provides the main glue between services
//
// It wraps micro registry (running services declared to the discovery server) into a more generic registry where all
// actual plugins are self-declared.
package registry

import (
	"fmt"
	"os"
	"strconv"
	"strings"
	"sync"

	"github.com/micro/go-micro/registry"

	"github.com/pydio/cells/common/service/metrics"
)

var (
	ProcessStartTags []string
)

func BuildServiceMeta() map[string]string {
	return map[string]string{
		"PID":       fmt.Sprintf("%d", os.Getpid()),
		"parentPID": fmt.Sprintf("%d", os.Getppid()),
		"metrics":   fmt.Sprintf("%d", metrics.GetExposedPort()),
		"start":     strings.Join(ProcessStartTags, ","),
	}
}

type Process struct {
	Id          string
	ParentId    string
	MetricsPort int
	PeerId      string
	PeerAddress string
	StartTag    string

	sLock    *sync.RWMutex
	Services map[string]string
}

func NewProcess(pid string) *Process {
	process := &Process{
		Id:       pid,
		Services: make(map[string]string),
		sLock:    &sync.RWMutex{},
	}
	return process
}

func (p *pydioregistry) registerProcessFromNode(n *registry.Node, serviceName string) {
	pid, ok := n.Metadata["PID"]
	if !ok {
		return
	}
	if proc, e := p.processes[pid]; e {
		proc.sLock.Lock()
		defer proc.sLock.Unlock()
		proc.Services[serviceName] = serviceName
		return
	}
	process := NewProcess(pid)
	process.PeerId = n.Id
	process.PeerAddress = n.Address
	process.Services[serviceName] = serviceName
	if parent, ok := n.Metadata["parentPID"]; ok {
		process.ParentId = parent
	}
	if port, ok := n.Metadata["metrics"]; ok {
		if met, e := strconv.ParseInt(port, 10, 32); e == nil {
			process.MetricsPort = int(met)
		}
	}
	if start, ok := n.Metadata["start"]; ok {
		process.StartTag = start
	}
	p.processes[pid] = process
}

func (p *pydioregistry) deregisterProcessFromNode(n *registry.Node, serviceName string) {
	pid, hasP := n.Metadata["PID"]
	if !hasP {
		// A full peer was deleted
		for pid, proc := range p.processes {
			if proc.PeerAddress == n.Address && strings.HasSuffix(proc.PeerId, n.Id) {
				delete(p.processes, pid)
				return
			}
		}
		return
	}
	process, ok := p.processes[pid]
	if !ok {
		return
	}
	process.sLock.Lock()
	defer process.sLock.Unlock()
	delete(process.Services, serviceName)
	if len(process.Services) == 0 {
		delete(p.processes, pid)
	}
}

func (p *pydioregistry) GetProcesses() map[string]*Process {
	return p.processes
}

func GetProcesses() map[string]*Process {
	return Default.GetProcesses()
}

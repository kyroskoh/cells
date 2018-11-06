'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _lang = require('pydio/util/lang');

var _lang2 = _interopRequireDefault(_lang);

var _path = require('pydio/util/path');

var _path2 = _interopRequireDefault(_path);

var _observable = require('pydio/lang/observable');

var _observable2 = _interopRequireDefault(_observable);

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

var _Configs = require('./Configs');

var _Configs2 = _interopRequireDefault(_Configs);

var _UploadItem = require('./UploadItem');

var _UploadItem2 = _interopRequireDefault(_UploadItem);

var _FolderItem = require('./FolderItem');

var _FolderItem2 = _interopRequireDefault(_FolderItem);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = function (_Observable) {
    _inherits(Store, _Observable);

    function Store() {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

        _this._processing = [];
        _this._processed = [];
        _this._errors = [];
        _this._sessions = [];
        _this._blacklist = [".ds_store", ".pydio"];

        _this._running = false;
        _this._pauseRequired = false;
        return _this;
    }

    _createClass(Store, [{
        key: 'getAutoStart',
        value: function getAutoStart() {
            return _Configs2.default.getInstance().getAutoStart();
        }
    }, {
        key: 'pushSession',
        value: function pushSession(session) {
            var _this2 = this;

            this._sessions.push(session);
            session.Task = _Task2.default.create(session);
            session.observe('update', function () {
                _this2.notify('update');
            });
            session.observe('children', function () {
                _this2.notify('update');
            });
            this.notify('update');
            session.observe('status', function (s) {
                if (s === 'ready') {
                    var autoStart = _Configs2.default.getInstance().getAutoStart();
                    if (autoStart && !_this2._processing.length && !_this2._pauseRequired) {
                        _this2.processNext();
                    } else if (!autoStart) {
                        _pydio2.default.getInstance().getController().fireAction("upload");
                    }
                }
            });
        }
    }, {
        key: 'log',
        value: function log() {}
    }, {
        key: 'hasQueue',
        value: function hasQueue() {
            return this.getNexts(1).length;
        }
    }, {
        key: 'clearAll',
        value: function clearAll() {
            this._sessions = [];

            this._processing = [];
            this._processed = [];
            this._errors = [];
            this.notify('update');
        }
    }, {
        key: 'processNext',
        value: function processNext() {
            var _this3 = this;

            var processables = this.getNexts();
            if (processables.length && !this._pauseRequired) {
                this._running = true;
                processables.map(function (processable) {
                    _this3._processing.push(processable);

                    processable.process(function () {
                        _this3._processing = _lang2.default.arrayWithout(_this3._processing, _this3._processing.indexOf(processable));
                        if (processable.getStatus() === 'error') {
                            _this3._errors.push(processable);
                        } else {
                            _this3._processed.push(processable);
                        }
                        _this3.processNext();
                        _this3.notify("update");
                    });
                });
            } else {
                this._running = false;
                this._pauseRequired = false;

                if (this.hasErrors()) {
                    if (!pydio.getController().react_selector) {
                        _pydio2.default.getInstance().getController().fireAction("upload");
                    }
                } else if (_Configs2.default.getInstance().getAutoClose()) {
                    this.notify("auto_close");
                }
            }
        }
    }, {
        key: 'getNexts',
        value: function getNexts() {
            var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

            var folders = [];
            this._sessions.forEach(function (session) {
                session.walk(function (item) {
                    folders.push(item);
                }, function (item) {
                    return item.getStatus() === 'new';
                }, 'folder', function () {
                    return folders.length >= 1;
                });
            });
            if (folders.length) {
                return [folders.shift()];
            }
            var items = [];
            var processing = this._processing.length;
            this._sessions.forEach(function (session) {
                var sessItems = 0;
                session.walk(function (item) {
                    items.push(item);
                    sessItems++;
                }, function (item) {
                    return item.getStatus() === 'new';
                }, 'file', function () {
                    return items.length >= max - processing;
                });
                if (sessItems === 0) {
                    session.Task.setIdle();
                }
            });
            return items;
        }
    }, {
        key: 'stopOrRemoveItem',
        value: function stopOrRemoveItem(item) {
            item.abort();
            ['_uploads', '_folders', '_processing', '_processed', '_errors'].forEach(function (key) {
                var arr = this[key];
                if (arr.indexOf(item) !== -1) {
                    this[key] = _lang2.default.arrayWithout(arr, arr.indexOf(item));
                }
            }.bind(this));
            this.notify("update");
        }
    }, {
        key: 'getItems',
        value: function getItems() {
            return {
                sessions: this._sessions,

                processing: this._processing,
                processed: this._processed,
                errors: this._errors
            };
        }
    }, {
        key: 'hasErrors',
        value: function hasErrors() {
            return this._errors.length ? this._errors : false;
        }
    }, {
        key: 'isRunning',
        value: function isRunning() {
            return this._running;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._pauseRequired = true;
            this.notify('update');
        }
    }, {
        key: 'resume',
        value: function resume() {
            this._pauseRequired = false;
            this.notify('update');
            this.processNext();
        }
    }, {
        key: 'handleFolderPickerResult',
        value: function handleFolderPickerResult(files, targetNode) {

            var session = new _Session2.default();
            this.pushSession(session);

            var folders = {};
            for (var i = 0; i < files.length; i++) {
                var relPath = null;
                if (files[i]['webkitRelativePath']) {
                    relPath = '/' + files[i]['webkitRelativePath'];
                    var folderPath = _path2.default.getDirname(relPath);
                    if (!folders[folderPath]) {
                        session.pushFolder(new _FolderItem2.default(folderPath, targetNode));
                        folders[folderPath] = true;
                    }
                }
                session.pushFile(new _UploadItem2.default(files[i], targetNode, relPath));
            }
            session.prepare().catch(function (e) {});
        }
    }, {
        key: 'handleDropEventResults',
        value: function handleDropEventResults(items, files, targetNode) {
            var _this4 = this;

            var accumulator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var filterFunction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;


            var session = new _Session2.default();
            this.pushSession(session);
            var filter = function filter(refPath) {
                if (filterFunction && !filterFunction(refPath)) {
                    return false;
                }
                return _this4._blacklist.indexOf(_path2.default.getBasename(refPath).toLowerCase()) === -1;
            };

            var enqueue = function enqueue(item) {
                var isFolder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (filterFunction && !filterFunction(item)) {
                    return;
                }
                if (accumulator) {
                    accumulator.push(item);
                } else if (isFolder) {
                    session.pushFolder(item);
                } else {
                    session.pushFile(item);
                }
            };

            if (items && items.length && (items[0].getAsEntry || items[0].webkitGetAsEntry)) {
                (function () {
                    var error = global.console ? global.console.log : function (err) {
                        global.alert(err);
                    };
                    var length = items.length;
                    var promises = [];

                    var _loop = function _loop(i) {
                        var entry = void 0;
                        if (items[i].kind && items[i].kind !== 'file') {
                            return 'continue';
                        }
                        if (items[0].getAsEntry) {
                            entry = items[i].getAsEntry();
                        } else {
                            entry = items[i].webkitGetAsEntry();
                        }

                        if (entry.isFile) {

                            promises.push(new Promise(function (resolve, reject) {
                                entry.file(function (File) {
                                    var u = void 0;
                                    if (File.size > 0 && filter(File.name)) {
                                        u = new _UploadItem2.default(File, targetNode, null, session);
                                    }
                                    resolve(u);
                                }, function () {
                                    reject();error();
                                });
                            }));
                        } else if (entry.isDirectory) {

                            entry.folderItem = new _FolderItem2.default(entry.fullPath, targetNode, session);

                            promises.push(_this4.recurseDirectory(entry, function (fileEntry) {
                                var relativePath = fileEntry.fullPath;
                                return new Promise(function (resolve, reject) {
                                    fileEntry.file(function (File) {
                                        var uItem = void 0;
                                        if (File.size > 0 && filter(File.name)) {
                                            uItem = new _UploadItem2.default(File, targetNode, relativePath, fileEntry.parentItem);
                                        }
                                        resolve(uItem);
                                    }, function (e) {
                                        reject(e);error();
                                    });
                                });
                            }, function (folderEntry) {
                                if (filter(folderEntry.fullPath)) {
                                    folderEntry.folderItem = new _FolderItem2.default(folderEntry.fullPath, targetNode, folderEntry.parentItem);
                                }
                                return Promise.resolve(folderEntry.folderItem);
                            }, error));
                        }
                    };

                    for (var i = 0; i < length; i++) {
                        var _ret2 = _loop(i);

                        if (_ret2 === 'continue') continue;
                    }

                    Promise.all(promises).then(function () {
                        return session.prepare();
                    }).catch(function (e) {});
                })();
            } else {
                for (var j = 0; j < files.length; j++) {
                    if (files[j].size === 0) {
                        alert(_pydio2.default.getInstance().MessageHash['html_uploader.8']);
                        return;
                    }
                    if (!filter(files[j].name)) {
                        return;
                    }
                    new _UploadItem2.default(files[j], targetNode, null, session);
                }
                session.prepare().catch(function (e) {});
            }
        }
    }, {
        key: 'recurseDirectory',
        value: function recurseDirectory(item, promiseFile, promiseFolder, errorHandler) {
            var _this5 = this;

            return new Promise(function (resolve) {
                _this5.dirEntries(item).then(function (entries) {
                    var promises = [];
                    entries.forEach(function (entry) {
                        if (entry.parent && entry.parent.folderItem) {
                            entry.parentItem = entry.parent.folderItem;
                        }
                        if (entry.isDirectory) {
                            promises.push(promiseFolder(entry));
                        } else {
                            promises.push(promiseFile(entry));
                        }
                    });
                    Promise.all(promises).then(function () {
                        resolve();
                    });
                });
            });
        }
    }, {
        key: 'dirEntries',
        value: function dirEntries(item) {
            var _this6 = this;

            var reader = item.createReader();
            var entries = [];
            var toArray = function toArray(list) {
                return Array.prototype.slice.call(list || [], 0);
            };
            return new Promise(function (resolve, reject) {
                var next = function next() {
                    reader.readEntries(function (results) {
                        if (results.length) {
                            entries = entries.concat(toArray(results));
                            next();
                        } else {
                            var promises = [];
                            entries.forEach(function (entry) {
                                entry.parent = item;
                                if (entry.isDirectory) {
                                    promises.push(_this6.dirEntries(entry).then(function (children) {
                                        entries = entries.concat(children);
                                    }));
                                }
                            });
                            if (promises.length) {
                                Promise.all(promises).then(function () {
                                    resolve(entries);
                                });
                            } else {
                                resolve(entries);
                            }
                        }
                    }, function (e) {
                        reject(e);
                    });
                };
                next();
            });
        }
    }], [{
        key: 'getInstance',
        value: function getInstance() {
            if (!Store.__INSTANCE) {
                Store.__INSTANCE = new Store();
            }
            return Store.__INSTANCE;
        }
    }]);

    return Store;
}(_observable2.default);

exports.default = Store;

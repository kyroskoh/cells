# Changes between v1.4.0 and v1.4.1

[See Full Changelog](https://github.com/pydio/cells/compare/v1.4.0...v1.4.1)

- [#066c8dc](https://github.com/pydio/cells/commit/066c8dc87093307dc801d75fd10f2c36c226ccbe): Config migration step for DSN with new mysql plugin
- [#55d39a4](https://github.com/pydio/cells/commit/55d39a42e1118839c868fc7cb5d9f1efe5273b2b): Add retry also on grpc.tasks initialization
- [#83e3dd1](https://github.com/pydio/cells/commit/83e3dd1cd5ccc78cff43c569aa0bce428238fdfc): Merge remote-tracking branch 'origin/master'
- [#8dc05c3](https://github.com/pydio/cells/commit/8dc05c351b16ed4f4b161944c101cfcbed674a09): Add retry for inserting default jobs at firstRun
- [#939cb52](https://github.com/pydio/cells/commit/939cb52aea64a30e338b1faac59ee223d8b5baaf): Last changes to db connection
- [#fc020a3](https://github.com/pydio/cells/commit/fc020a31b472bf35c3e88d4417eb2865dd32c8c3): Merge remote-tracking branch 'origin/master'
- [#c004df3](https://github.com/pydio/cells/commit/c004df360ea70a05b2434934b6da1b1f77146e33): Detect language for mail-based users
- [#4c92709](https://github.com/pydio/cells/commit/4c927096fc1192a0d03dc5252f9b18bbebe797da): Display issue
- [#3ee8eef](https://github.com/pydio/cells/commit/3ee8eef12fa970522abf43b0c2d959a85016b7cd): Removing consul_config for now
- [#b7508b0](https://github.com/pydio/cells/commit/b7508b05156e60d21e0d81f682e888c8a8cd31fb): Phrasing
- [#2d42d99](https://github.com/pydio/cells/commit/2d42d996e5138cac145ded5a394c5a2f3f236407): Configuration database set
- [#c87026f](https://github.com/pydio/cells/commit/c87026f4a6dabc9e1d4a88194c494b51dbbfd7d9): Commands
- [#e9253b6](https://github.com/pydio/cells/commit/e9253b63260fd326a6b2f8922a6dc402766e69b5): Improve install: fast proxy restart for opening browser window, then add timeout before reloading UX because gateway is restarting.
- [#6773fb3](https://github.com/pydio/cells/commit/6773fb36e8da3af1056a252ebac05a47b30159ac): New command for adding databases
- [#eefea2e](https://github.com/pydio/cells/commit/eefea2ea7502d97c8265c890228fac239f869144): Workaround for link click on firefox
- [#7ca6abe](https://github.com/pydio/cells/commit/7ca6abef75ea3b3744b8ccaa2ac83ab002ab8f4f): Improve display for datasources status
- [#961c377](https://github.com/pydio/cells/commit/961c3771a75e3ed7690ecfcd6fabff776202d693): Use hostname at install time for default datasources (or ip if not possible)
- [#d076d05](https://github.com/pydio/cells/commit/d076d05e602f203efe2914b092eb7459a4087ae9): Do not show schedule for event-based jobs
- [#92429b4](https://github.com/pydio/cells/commit/92429b4f50f4ebc1d098038bfc9f53563031a88d): Finish refactoring common/utils
- [#9ea40f5](https://github.com/pydio/cells/commit/9ea40f54c80e39ca096ae4e5efbfbdad761a1cfd): Utils refactoring: new package mtree
- [#dca784f](https://github.com/pydio/cells/commit/dca784fba6d7fd7a4f55bb68acc39bd5791bd152): Merge remote-tracking branch 'origin/master'
- [#fc7055f](https://github.com/pydio/cells/commit/fc7055f03111ab8103f6a5b3f6506e8ffd5b81c6): Refactor common/utils into dedicated packages
- [#1d86d56](https://github.com/pydio/cells/commit/1d86d56fb7d0a6844076479fd4100a7ab2485969): Fix Private IP
- [#3814c47](https://github.com/pydio/cells/commit/3814c4720ecc50bcf3e5849f0d41f322c52a689d): More Italian translation for the Admin console
- [#ca173a2](https://github.com/pydio/cells/commit/ca173a2df62609722eea057f2b58b930f81b0de4): More Italian translation for the admin console
- [#36366fd](https://github.com/pydio/cells/commit/36366fdd965c09768c2e34288bbedd4437336ab4): More Italian translation for the admin console
- [#d67d4ce](https://github.com/pydio/cells/commit/d67d4ce5cfed961eabb620669bdbbdc85d70bfbd): Change message
- [#40c9c66](https://github.com/pydio/cells/commit/40c9c66e9a77dadc94a0b598571ed314457ac912): Fix "No Private IP" found
- [#dafb6c1](https://github.com/pydio/cells/commit/dafb6c114cdb611eff4e7732b472610519f1693f): Support hostname for PeerAddress: publish hostname in Node metadata, record it in registry.Peer Refactor ip, ports, selectors tools under dedicated package utils/net
- [#f8da331](https://github.com/pydio/cells/commit/f8da331c1dda488790559d19f0bfa952fb49de2a): Meta namespace input validation
- [#6eb1cdb](https://github.com/pydio/cells/commit/6eb1cdbb7f9cdb208c9bdd39a9db5e296d14d8c1): Swallow expected error when no EXIF data is present
- [#38c1d5e](https://github.com/pydio/cells/commit/38c1d5e99eab42250740ee818c5f0f494fb84cb5): Fixng prepared statements with policies
- [#68cb76b](https://github.com/pydio/cells/commit/68cb76b905566ebff9d74423eaeb267168a35005): Fixng prepared statements with policies
- [#061776f](https://github.com/pydio/cells/commit/061776f859c8d286d3a21e6bad659a25a51381b9): Merge remote-tracking branch 'origin/master'
- [#87a5e4d](https://github.com/pydio/cells/commit/87a5e4dcfb9a53a98dcf5bcaf602a98346d62a3f): Missing toString() calls on some color objects ...
- [#420e986](https://github.com/pydio/cells/commit/420e98647c3e2ff8e403a6aedcaf1579fd9c70d1): More Italian messages
- [#dc03606](https://github.com/pydio/cells/commit/dc03606b0b05c00bcf400c400e437c184b7657ff): More Italian messages
- [#942d628](https://github.com/pydio/cells/commit/942d628ededafc5cc6c14e2d55a194e5ac334288): Merge remote-tracking branch 'origin/master'
- [#7509fd4](https://github.com/pydio/cells/commit/7509fd4daeb055d1f4e6af4865ba9cb4e4bb63d0): UX: Remember display mode for workspace/cell - Partially fix sorting (still issues with some metadata types)
- [#79be0a0](https://github.com/pydio/cells/commit/79be0a0ae6da71baf8b7b3166d0b48caf8dac1ef): Better thumbs caching: cache in local storage instead of node metadata (as it is cleared on each refresh)
- [#a4c8b64](https://github.com/pydio/cells/commit/a4c8b644fcacec825cb8227b11ccab2680b86509): Add link to dev guide and UX screenshot
- [#76a0e2e](https://github.com/pydio/cells/commit/76a0e2e0855e63688088f77d2a19e0afa30914e7): Fixing prepared statements with goqu
- [#96ec094](https://github.com/pydio/cells/commit/96ec0941ec15f25a5dcdfc4abb3f2fad1eac6a24): Switch to bbolt
- [#67d94e4](https://github.com/pydio/cells/commit/67d94e46c58aa204bc03227ec9ce03a4cf46c843): Update Bleve dependency
- [#b547736](https://github.com/pydio/cells/commit/b54773680da2cb2fb8254b84255604e8a6fa8023): Remove legacy comment
- [#8ffcb82](https://github.com/pydio/cells/commit/8ffcb827b4039a7cd49c6f50897733670ea61622): Fix language detection for sending emails
- [#fb8f85c](https://github.com/pydio/cells/commit/fb8f85c7e805fa9ed5d4e706dc25d6ca7086c26b): Re-removing consul
- [#abbfda3](https://github.com/pydio/cells/commit/abbfda3268695754732b073c5287afea3bece499): Removing log
- [#acb2c7c](https://github.com/pydio/cells/commit/acb2c7c3e92c69797c4ae8b66cb1b86043937e91): Lower and instrument bigcache
- [#7227c6a](https://github.com/pydio/cells/commit/7227c6af70b73916a07e6b6966be95a69c0be084): Fixing mysql allow native password install
- [#f6b2c9e](https://github.com/pydio/cells/commit/f6b2c9e64352c98704a260f86df697450c722c86): Fixing install first steps
- [#ed498e1](https://github.com/pydio/cells/commit/ed498e1d5b1b8b4e1269e8cd83bffc864f6067c3): Remove unnecessary error log when toggling bookmark
- [#a827d46](https://github.com/pydio/cells/commit/a827d46cee2beca3370a3d58427663d63eff2e35): Re-adapt task logging for sync-changes
- [#76b3564](https://github.com/pydio/cells/commit/76b356415481f8b9c817de8f80fe70f2a3b252bc): Fixing mysql8
- [#7dc3563](https://github.com/pydio/cells/commit/7dc35637fee4451c0960eea8a5a29966be5639d4): Remove consul support as it's half-baked
- [#1fc9ff5](https://github.com/pydio/cells/commit/1fc9ff584562d884f7caa064d15532e58ce38a07): Move test file
- [#f4903ca](https://github.com/pydio/cells/commit/f4903ca30b83ce9fef7630ce724803e1d3a60498): Merge remote-tracking branch 'origin/master'
- [#6b5612d](https://github.com/pydio/cells/commit/6b5612de6a1ed488944cb41ab958d8969834605e): Unused code
- [#f7d78fb](https://github.com/pydio/cells/commit/f7d78fbd732f91d98f7965d8c6aadfa6fd59bf63): re-enable pprof with SIGUSR1
- [#c78c246](https://github.com/pydio/cells/commit/c78c2462f8231b065687031ff62c3b273d6c4dca): Provide a mean to force used protocol in public URL.
- [#6fd8d78](https://github.com/pydio/cells/commit/6fd8d787343ca92f9c9ce4e0ce83dca4a0591af9): Fix cells-ctl create user command
- [#5492e53](https://github.com/pydio/cells/commit/5492e5338146ede9cff378a903314193f09a243b): Merge with latest Cells version
- [#ef86f32](https://github.com/pydio/cells/commit/ef86f326e724293ca2b3afe3c2289fd5c39f0cb1): Better policy management when creating a user via CLI
- [#cf6dd6e](https://github.com/pydio/cells/commit/cf6dd6e34db84825bcb50cc8823baf436f55df2a): Update rand for goreport card
- [#e58f41c](https://github.com/pydio/cells/commit/e58f41cd08ccfa2e8bd565923a5cae273c76f0dd): Change supported go version
- [#2883781](https://github.com/pydio/cells/commit/2883781277e68d81464344dc830286d2cf77449b): Update Travis for build version
- [#53a979f](https://github.com/pydio/cells/commit/53a979fa0626bd3b43273a77eba14e38bac23007): Run goimports -w on some files

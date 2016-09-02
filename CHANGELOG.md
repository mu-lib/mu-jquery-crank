# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/mu-lib/mu-jquery-crank/compare/v2.0.0...v2.0.1) (2016-09-02)


### Bug Fixes

* fix typo in global assignment ([8c9f098](https://github.com/mu-lib/mu-jquery-crank/commit/8c9f098))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/mu-lib/mu-jquery-crank/compare/v1.1.1...v2.0.0) (2016-09-02)


### Bug Fixes

* correct global name ([4e109aa](https://github.com/mu-lib/mu-jquery-crank/commit/4e109aa))


### Features

* don't set $.fn.crank ([d340dde](https://github.com/mu-lib/mu-jquery-crank/commit/d340dde))


### BREAKING CHANGES

* From this version it's prefferred that users call crank
via `crank.call($element, eventType, args..)`. Users who want the old behaviour
can use `$.fn.crank = require("mu-jquery-crank/jquery.crank");` or
equivalent.



<a name="1.1.1"></a>
## [1.1.1](https://github.com/mu-lib/mu-jquery-crank/compare/v1.1.0...v1.1.1) (2016-09-01)


### Bug Fixes

* forgot to return $.fn.crank ([23a274c](https://github.com/mu-lib/mu-jquery-crank/commit/23a274c))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/mu-lib/mu-jquery-crank/compare/v1.0.0...v1.1.0) (2016-09-01)


### Features

* UMD packaging ([#1](https://github.com/mu-lib/mu-jquery-crank/issues/1)) ([75fb086](https://github.com/mu-lib/mu-jquery-crank/commit/75fb086))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/mu-lib/mu-jquery-crank/compare/0.0.1...v1.0.0) (2016-08-16)


### Bug Fixes

* Handle async default return ([8c02a3a](https://github.com/mu-lib/mu-jquery-crank/commit/8c02a3a))


### Features

* Separate attr and eventType argument ([2f29d1c](https://github.com/mu-lib/mu-jquery-crank/commit/2f29d1c))


### BREAKING CHANGES

* eventType is a required (additional) argument.

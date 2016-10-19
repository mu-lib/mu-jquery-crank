# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.3"></a>
## [3.0.3](https://github.com/mu-lib/mu-jquery-crank/compare/v3.0.2...v3.0.3) (2016-10-19)


### Bug Fixes

* **crank:** UMD fixes ([c01d671](https://github.com/mu-lib/mu-jquery-crank/commit/c01d671))
* **crank:** use provided jQuery ([1e7d521](https://github.com/mu-lib/mu-jquery-crank/commit/1e7d521))
* **packaging:** bumped deps ([d3520a4](https://github.com/mu-lib/mu-jquery-crank/commit/d3520a4))
* **packaging:** jQuery versions ([dbcc5ef](https://github.com/mu-lib/mu-jquery-crank/commit/dbcc5ef))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/mu-lib/mu-jquery-crank/compare/v3.0.1...v3.0.2) (2016-10-12)


### Bug Fixes

* **packaging:** Updated package.json and bumped deps ([8e5b6fd](https://github.com/mu-lib/mu-jquery-crank/commit/8e5b6fd))
* **tests:** test cleanup ([8a13f01](https://github.com/mu-lib/mu-jquery-crank/commit/8a13f01))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/mu-lib/mu-jquery-crank/compare/v3.0.0...v3.0.1) (2016-09-14)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/mu-lib/mu-jquery-crank/compare/v2.1.2...v3.0.0) (2016-09-12)


### Features

* change crank signature ([6e9e950](https://github.com/mu-lib/mu-jquery-crank/commit/6e9e950))
* Qunit ([#2](https://github.com/mu-lib/mu-jquery-crank/issues/2)) ([7081772](https://github.com/mu-lib/mu-jquery-crank/commit/7081772))


### BREAKING CHANGES

* The new crank takes a function that should return an array of ns or a promise of it.



<a name="2.1.2"></a>
## [2.1.2](https://github.com/mu-lib/mu-jquery-crank/compare/v2.1.1...v2.1.2) (2016-09-08)


### Bug Fixes

* bump mu-jquery-wire ([4b19207](https://github.com/mu-lib/mu-jquery-crank/commit/4b19207))
* UMD fixes ([803e204](https://github.com/mu-lib/mu-jquery-crank/commit/803e204))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/mu-lib/mu-jquery-crank/compare/v2.1.0...v2.1.1) (2016-09-06)


### Bug Fixes

* bump mu-jquery-wire to 4.0.1 ([81cf772](https://github.com/mu-lib/mu-jquery-crank/commit/81cf772))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/mu-lib/mu-jquery-crank/compare/v2.0.2...v2.1.0) (2016-09-06)


### Features

* bump mu-jquery-wire to 4.0.0 ([becc489](https://github.com/mu-lib/mu-jquery-crank/commit/becc489))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/mu-lib/mu-jquery-crank/compare/v2.0.1...v2.0.2) (2016-09-02)


### Bug Fixes

* use mu-jquery-wire/jquery.wire ([aa81619](https://github.com/mu-lib/mu-jquery-crank/commit/aa81619))



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

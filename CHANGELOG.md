# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="6.0.0"></a>
# [6.0.0](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.6...v6.0.0) (2017-05-07)


### Features

* normalize array result ([89acda1](https://github.com/mu-lib/mu-jquery-crank/commit/89acda1))


### BREAKING CHANGES

* `undefined` results are now mapped to `[]`.



<a name="5.0.6"></a>
## [5.0.6](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.5...v5.0.6) (2017-05-04)


### Bug Fixes

* bump devDeps ([b5acf73](https://github.com/mu-lib/mu-jquery-crank/commit/b5acf73))



<a name="5.0.5"></a>
## [5.0.5](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.4...v5.0.5) (2017-04-25)


### Bug Fixes

* bumped devDeps ([0d8af7c](https://github.com/mu-lib/mu-jquery-crank/commit/0d8af7c))



<a name="5.0.4"></a>
## [5.0.4](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.3...v5.0.4) (2017-04-23)


### Bug Fixes

* bumped deps ([98789e2](https://github.com/mu-lib/mu-jquery-crank/commit/98789e2))



<a name="5.0.3"></a>
## [5.0.3](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.2...v5.0.3) (2017-04-20)


### Bug Fixes

* bumped devDependencies ([4d687c0](https://github.com/mu-lib/mu-jquery-crank/commit/4d687c0))



<a name="5.0.2"></a>
## [5.0.2](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.1...v5.0.2) (2017-04-08)


### Bug Fixes

* bumped deps ([f4aa799](https://github.com/mu-lib/mu-jquery-crank/commit/f4aa799))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/mu-lib/mu-jquery-crank/compare/v5.0.0...v5.0.1) (2017-04-08)


### Bug Fixes

* bumped deps ([2cb6a41](https://github.com/mu-lib/mu-jquery-crank/commit/2cb6a41))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/mu-lib/mu-jquery-crank/compare/v4.0.2...v5.0.0) (2017-04-07)


### Bug Fixes

* deprecate collect for mu-jquery-capture/capture ([874c5b5](https://github.com/mu-lib/mu-jquery-crank/commit/874c5b5))


### BREAKING CHANGES

* We've relocated the capture core into a separate package called `mu-jquery-capture/capture`. Signature has also changed so devs be ware.



<a name="4.0.2"></a>
## [4.0.2](https://github.com/mu-lib/mu-jquery-crank/compare/v4.0.1...v4.0.2) (2017-04-06)


### Bug Fixes

* use Array.prototype over [] ([32f592e](https://github.com/mu-lib/mu-jquery-crank/commit/32f592e))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/mu-lib/mu-jquery-crank/compare/v4.0.0...v4.0.1) (2017-04-05)


### Bug Fixes

* upgraded deps ([83e7ed7](https://github.com/mu-lib/mu-jquery-crank/commit/83e7ed7))
* upgraded dev dependencies ([29923f7](https://github.com/mu-lib/mu-jquery-crank/commit/29923f7))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/mu-lib/mu-jquery-crank/compare/v3.0.3...v4.0.0) (2017-03-30)


### Bug Fixes

* added tests for handler arguments ([0e295eb](https://github.com/mu-lib/mu-jquery-crank/commit/0e295eb))


### Features

* added support for collecting handler result ([ad05be1](https://github.com/mu-lib/mu-jquery-crank/commit/ad05be1))


### BREAKING CHANGES

* `jquery.crank` now accounts for usage of `collect` for async handler and unwraps arrays before running them through `jQuery.when`. If your handler returns an arrat you need to wrapp that in an outer array for it to work.



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

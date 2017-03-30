(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-crank/tests/collect"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-crank")];
    }, {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }));
  }
})([
  "qunit",
  "jquery",
  "../collect",
], this, function (QUnit, $, collect) {

  QUnit.module("mu-jquery-crank/collect");

  QUnit.test("collecting result", function (assert) {
    var $elements = $("<div>")
      .on("test", collect(function () {
        return "first";
      }))
      .on("test", collect(function () {
        return "last";
      }));

    assert.deepEqual($elements.triggerHandler("test"), ["first", "last"]);
  });
});
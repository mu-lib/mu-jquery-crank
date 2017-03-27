(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-crank/tests/jquery.crank"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-crank")];
    }, {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }));
  }
})([
  "qunit",
  "jquery",
  "../jquery.crank",
], this, function (QUnit, $, crank) {
  var root = this;
  var setTimeout = root.setTimeout;

  QUnit.module("mu-jquery-crank/jquery.crank");

  QUnit.test("$noop", function (assert) {
    var $elements = $();

    assert.expect(1);

    return crank.call($elements, function () {
      assert.notOk(true, "should never be called");
    }, "test").then(function (result) {
      assert.deepEqual(result, undefined);
    });
  });

  QUnit.test("handlers default arguments", function (assert) {
    var $elements = $("<div>")
      .on("test.ns", function ($event) {
        assert.equal(arguments.length, 1, "arguments.length is 1");
        assert.ok($event instanceof $.Event, "$event is instance of $.Event");
      });

    assert.expect(2);

    return crank.call($elements, "ns", "test");
  });

  QUnit.test("handlers extra arguments", function (assert) {
    var o = {};
    var a = [];
    var $elements = $("<div>")
      .on("test.ns", function ($event, string, boolean, number, object, array) {
        assert.equal(arguments.length, 6, "arguments.length is 7");
        assert.strictEqual(string, "", "string equals ''");
        assert.strictEqual(boolean, true, "boolean equals true");
        assert.strictEqual(number, 1, "number equals 1");
        assert.strictEqual(object, o, "object equals o");
        assert.strictEqual(array, a, "array equals a");
      });

    assert.expect(6);

    return crank.call($elements, "ns", "test", "", true, 1, o, a);
  });

  QUnit.test("handlers are called on one element", function (assert) {
    var $elements = $("<div>")
      .on("test.one", function () {
        assert.ok(true, "handler called");
      })
      .on("test.two", function () {
        assert.ok(true, "handler called");
      });

    assert.expect(2);

    return crank.call($elements, ["one", "two"], "test");
  });

  QUnit.test("handlers are called on many elements", function (assert) {
    var $elements = $("<div></div><div></div>")
      .on("test.one", function () {
        assert.ok(true, "handler called");
      })
      .on("test.two", function () {
        assert.ok(true, "handler called");
      });

    assert.expect(4);

    return crank.call($elements, ["one", "two"], "test");
  });

  QUnit.test("handler result from one element is collected", function (assert) {
    var count = 0;
    var $elements = $("<div></div>")
      .on("test.one", function () {
        return ++count;
      })
      .on("test.two", function () {
        return ++count;
      });

    assert.expect(1);

    return crank.call($elements, ["one", "two"], "test").done(function (result) {
      assert.deepEqual(result, [[1, 2]]);
    });
  });

  QUnit.test("handler results from many elements are collected", function (assert) {
    var count = 0;
    var $elements = $("<div></div><div></div>")
      .on("test.one", function () {
        return ++count;
      })
      .on("test.two", function () {
        return ++count;
      });

    assert.expect(1);

    return crank.call($elements, ["one", "two"], "test").done(function (result) {
      assert.deepEqual(result, [[1, 2], [3, 4]]);
    });
  });

  QUnit.test("non-truthy handler return defaults to input", function (assert) {
    var $elements = $("<div>")
      .on("test.undefined", function () {
      })
      .on("test.boolean", function () {
        return false;
      })
      .on("test.object", function () {
        return null;
      })
      .on("test.string", function () {
        return "";
      })
      .on("test.number", function () {
        return 0;
      });

    assert.expect(1);

    return crank.call($elements, ["undefined", "boolean", "object", "string", "number"], "test").then(function (result) {
      assert.deepEqual(result, [["undefined", "boolean", "object", "string", "number"]]);
    });
  });

  QUnit.test("truthy handler return is propagated", function (assert) {
    var o = {};
    var a = [];
    var $elements = $("<div>")
      .on("test.string", function () {
        return "string";
      })
      .on("test.boolean", function () {
        return true;
      })
      .on("test.number", function () {
        return 1;
      })
      .on("test.object", function () {
        return o;
      })
      .on("test.array", function () {
        return a;
      });

    assert.expect(1);

    return crank.call($elements, ["string", "boolean", "number", "object", "array"], "test").then(function (result) {
      assert.deepEqual(result, [["string", true, 1, o, a]]);
    });
  });

  QUnit.test("async handler return is propagated", function (assert) {
    var $elements = $("<div>")
      .on("test.undefined", function () {
        return $.Deferred(function (deferred) {
          setTimeout(deferred.resolve, 0);
        }).promise();
      })
      .on("test.string", function () {
        return $.Deferred(function (deferred) {
          setTimeout(function () {
            deferred.resolve("woot");
          }, 0);
        }).promise();
      });

    assert.expect(1);

    return crank.call($elements, ["undefined", "string"], "test").done(function (result) {
      assert.deepEqual(result, [["undefined", "woot"]]);
    });
  });

  QUnit.test("only last result is returned", function (assert) {
    var $elements = $("<div>")
      .on("test.ns", function ($event, cb) {
        return "first";
      })
      .on("test.ns", function ($event, cb) {
        return "last";
      });

    assert.expect(1);

    return crank.call($elements, "ns", "test").then(function (result) {
      assert.deepEqual(result, [["last"]]);
    });
  });
});
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
  "mu-jquery-capture/capture",
  "../jquery.crank"
], this, function (QUnit, $, capture, crank) {
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

  QUnit.test("handler default arguments", function (assert) {
    var $elements = $("<div>")
      .on("test.ns", function ($event) {
        assert.equal(arguments.length, 1, "arguments.length is 1");
        assert.ok($event instanceof $.Event, "$event is instance of $.Event");
      });

    assert.expect(2);

    return crank.call($elements, "ns", "test");
  });

  QUnit.test("handler extra arguments", function (assert) {
    var o = {};
    var a = [];
    var $elements = $("<div>")
      .on("test.ns", function ($event, string, boolean, number, object, array) {
        assert.equal(arguments.length, 6, "arguments.length is 7");
        assert.strictEqual(string, "s", "string equals 's'");
        assert.strictEqual(boolean, true, "boolean equals true");
        assert.strictEqual(number, 1, "number equals 1");
        assert.strictEqual(object, o, "object equals o");
        assert.strictEqual(array, a, "array equals a");
      });

    assert.expect(6);

    return crank.call($elements, "ns", "test", "s", true, 1, o, a);
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

  QUnit.test("handler result from one element", function (assert) {
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

  QUnit.test("handler result from many elements", function (assert) {
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

  QUnit.test("array handler result unwrapped", function (assert) {
    var $elements = $("<div>")
      .on("test.string", function ($event) {
        return "s";
      })
      .on("test.array", function ($event) {
        return ["a"];
      });

    assert.expect(1);

    return crank.call($elements, ["string", "array"], "test").then(function (result) {
      assert.deepEqual(result, [["s", "a"]]);
    });
  });

  QUnit.test("falsy handler result returns input", function (assert) {
    var $elements = $("<div>")
      .on("test.undefined", function () {
      })
      .on("test.boolean", function () {
        return false;
      })
      .on("test.number", function () {
        return 0;
      })
      .on("test.string", function () {
        return "";
      })
      .on("test.object", function () {
        return null;
      })
      .on("test.array", function () {
        return [];
      })

    assert.expect(1);

    return crank.call($elements, ["undefined", "boolean", "number", "string", "object", "array"], "test").then(function (result) {
      assert.deepEqual(result, [["undefined", "boolean", "number", "string", "object", "array"]]);
    });
  });

  QUnit.test("truthy handler result", function (assert) {
    var o = {};
    var a = [];
    var $elements = $("<div>")
      .on("test.boolean", function () {
        return true;
      })
      .on("test.number", function () {
        return 1;
      })
      .on("test.string", function () {
        return "s";
      })
      .on("test.object", function () {
        return o;
      })
      .on("test.array", function () {
        return [a];
      });

    assert.expect(1);

    return crank.call($elements, ["string", "boolean", "number", "object", "array"], "test").then(function (result) {
      assert.deepEqual(result, [["s", true, 1, o, a]]);
    });
  });

  QUnit.test("async handler result", function (assert) {
    var $elements = $("<div>")
      .on("test.undefined", function () {
        return $.Deferred(function (deferred) {
          setTimeout(deferred.resolve, 0);
        }).promise();
      })
      .on("test.string", function () {
        return $.Deferred(function (deferred) {
          setTimeout(function () {
            deferred.resolve("s");
          }, 0);
        }).promise();
      });

    assert.expect(1);

    return crank.call($elements, ["undefined", "string"], "test").done(function (result) {
      assert.deepEqual(result, [["undefined", "s"]]);
    });
  });

  QUnit.test("last handler result only", function (assert) {
    var $elements = $("<div>")
      .on("test.ns", function ($event) {
        return "first";
      })
      .on("test.ns", function ($event) {
        return "last";
      });

    assert.expect(1);

    return crank.call($elements, "ns", "test").then(function (result) {
      assert.deepEqual(result, [["last"]]);
    });
  });

  QUnit.test("capture sync handler result", function (assert) {
    var $elements = $("<div>")
      .on("test.ns", capture.call($, function () {
        return "first";
      }))
      .on("test.ns", capture.call($, function () {
        return "last";
      }));

    assert.expect(1);

    return crank.call($elements, "ns", "test").done(function (result) {
      assert.deepEqual(result, [[["first", "last"]]]);
    });
  });

  QUnit.test("capture async handler result", function (assert) {
    var $elements = $("<div>")
      .on("test.ns", capture.call($, function () {
        return $.Deferred(function (deferred) {
          setTimeout(function () {
            deferred.resolve("first");
          }, 0);
        }).promise();
      }))
      .on("test.ns", capture.call($, function () {
        return $.Deferred(function (deferred) {
          setTimeout(function () {
            deferred.resolve("last");
          }, 0);
        }).promise();
      }));

    assert.expect(1);

    return crank.call($elements, "ns", "test").done(function (result) {
      assert.deepEqual(result, [[["first", "last"]]]);
    });
  });
});
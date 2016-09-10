(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-crank/tests/jquery.crank"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }[m = m.replace(/^\.{2}/, "mu-jquery-crank")] || root[m];
    }));
  }
})([
  "qunit",
  "jquery",
  "../jquery.crank",
], this, function(QUnit, $, crank) {
  var root = this;
  var setTimeout = root.setTimeout;
  var slice = Array.prototype.slice;

  QUnit.module("mu-jquery-crank/jquery.crank");
  
  QUnit.test("$noop", function(assert) {
    var $elements = $();

    assert.expect(1);

    return crank.call($elements, function () {
      assert.notOk(true, "should never be called");
    }, "test").then(function () {
      assert.deepEqual(slice.call(arguments), []);
    });
  });

  QUnit.test("handlers are called on one element", function(assert) {
    var $elements = $("<div>")
      .on("test.one", function() {
        assert.ok(true, "handler called");
      })
      .on("test.two", function() {
        assert.ok(true, "handler called");
      });

    assert.expect(2);

    return crank.call($elements, function () {
      return ["one","two"];
    }, "test");
  });

  QUnit.test("handlers are called on many elements", function(assert) {
    var $elements = $("<div></div><div></div>")
      .on("test.one", function() {
        assert.ok(true, "handler called");
      })
      .on("test.two", function() {
        assert.ok(true, "handler called");
      });

    assert.expect(4);

    return crank.call($elements, function () {
      return ["one","two"];
    }, "test");
  });

  QUnit.test("handler result from one element is collected", function(assert) {
    var count = 0;
    var $elements = $("<div></div>")
      .on("test.one", function() {
        return ++count;
      })
      .on("test.two", function() {
        return ++count;
      });

    assert.expect(1);

    return crank.call($elements, function () {
      return ["one","two"];
    }, "test").done(function() {
      assert.deepEqual(slice.call(arguments), [1,2]);
    });
  });

  QUnit.test("handler results from many elements are collected", function(assert) {
    var count = 0;
    var $elements = $("<div></div><div></div>")
      .on("test.one", function() {
        return ++count;
      })
      .on("test.two", function() {
        return ++count;
      });

    assert.expect(1);

    return crank.call($elements, function () {
      return ["one","two"];
    }, "test").done(function() {
      assert.deepEqual(slice.call(arguments), [[1,2],[3,4]]);
    });
  });

  QUnit.test("non-truthy handler return defaults to input", function(assert) {
    var $elements = $("<div>")
      .on("test.undefined", function() {
      })
      .on("test.boolean", function() {
        return false;
      })
      .on("test.object", function() {
        return null;
      })
      .on("test.string", function() {
        return "";
      })
      .on("test.number", function() {
        return 0;
      });

    assert.expect(1);

    return crank.call($elements, function () {
      return ["undefined","boolean","object","string","number"];
    }, "test").then(function () {
      assert.deepEqual(slice.call(arguments), [ "undefined","boolean","object","string","number" ]);
    });
  });

  QUnit.test("truthy handler return is propagated", function(assert) {
    var o = {};
    var a = [];
    var $elements = $("<div>")
      .on("test.string", function() {
        return "string";
      })
      .on("test.boolean", function() {
        return true;
      })
      .on("test.number", function() {
        return 1;
      })
      .on("test.object", function() {
        return o;
      })
      .on("test.array", function() {
        return a;
      });

    assert.expect(1);

    return crank.call($elements, function () {
      return ["string","boolean","number","object","array"];
    }, "test").then(function () {
      assert.deepEqual(slice.call(arguments), [ "string",true,1,o,a ]);
    });
  });

  QUnit.test("async handler return is propagated", function(assert) {
    var $elements = $("<div>")
      .on("test.undefined", function() {
        return $.Deferred(function(deferred) {
          setTimeout(deferred.resolve, 0);
        }).promise();
      })
      .on("test.string", function() {
        return $.Deferred(function(deferred) {
          setTimeout(function() {
            deferred.resolve("woot");
          }, 0);
        }).promise();
      });

    assert.expect(1);

    return crank.call($elements, function () {
      return ["undefined","string"];
    }, "test").done(function() {
      assert.deepEqual(slice.call(arguments), [ "undefined","woot" ]);
    });
  });
});
(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(function(m) {
      return require(m);
    }));
  } else {
    root["mu-jquery-crank/jquery.crank"] = factory.apply(root, modules.map(function(m) {
      return {
          "jquery": root.jQuery
        }[m] || root[m];
    }));
  }
})([
  "jquery",
  "mu-jquery-wire/jquery.wire"
], this, function($, wire) {
  var slice = Array.prototype.slice;
  var re = /\s+/;

  function crank(attr, eventType) {
    var args = slice.call(arguments, 2);

    return wire.call(this,
      function(name) {
        return ($(this).attr(name) || "").split(re);
      },
      function(ns) {
        return $.when($(this).triggerHandler(eventType + "." + ns, args)).then(function(result) {
          return arguments.length > 1 ? slice.call(arguments) : result || ns;
        });
      },
      attr);
  }

  return function() {
    var self = this;
    var args = arguments;

    return $.Deferred(function(deferred) {
      try {
        $.when(crank.apply(self, args)).then(
          function() {
            deferred.resolveWith(self, arguments);
          }, function() {
            deferred.rejectWith(self, arguments);
          });
      } catch (e) {
        deferred.rejectWith(self, [e]);
      }
    }).promise();
  };
});

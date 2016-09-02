(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    root["mu-jquery-crank/jquery.crank"], factory(root.jQuery);
  }
}(this, function($) {
  var slice = Array.prototype.slice;

  function crank(attr, eventType) {
    var self = this;
    var args = slice.call(arguments, 2);

    return $.when.apply(null, this.map(function(index, element) {
      var $element = $(element);

      return $.when.apply(null, $element
        .attr(attr)
        .split(/\s+/)
        .map(function(module) {
          return $.when($element.triggerHandler(eventType + "." + module, args)).then(function(result) {
            return arguments.length > 1 ? slice.call(arguments) : result || module;
          });
        }));
    }));
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
}));

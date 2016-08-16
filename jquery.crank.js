(function($, when, slice) {

  function crank(attr) {
    var self = this;
    var args = slice.call(arguments, 1);

    return when.apply(null, this.map(function(index, element) {
      var $element = $(element);

      return when.apply(null, $element
        .attr(attr)
        .split(/\s+/)
        .map(function(module) {
          return when($element.triggerHandler(attr + "." + module, args)).then(function(result) {
            return arguments.length > 1 ? slice.call(arguments) : result || module;
          });
        }));
    }));
  }

  $.fn.crank = function() {
    var self = this;
    var args = arguments;

    return $.Deferred(function(deferred) {
      try {
        when(crank.apply(self, args)).then(
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
})(jQuery, jQuery.when, Array.prototype.slice);

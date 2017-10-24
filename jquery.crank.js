(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-wire/jquery.wire"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-wire/jquery.wire"));
  } else {
    root["mu-jquery-crank/jquery.crank"] = factory(root["mu-jquery-wire/jquery.wire"]);
  }
})(this, function (wire) {
  var slice = Array.prototype.slice;

  return function (input, eventType) {
    var args = slice.call(arguments, 2);

    return wire.call(this, input, function ($element, index, ns) {
      var $ = $element.constructor;
      return $.when.apply(null, $.makeArray($element.triggerHandler(eventType + "." + ns, args))).then(function (result) {
        return arguments.length > 1 ? slice.call(arguments) : result || ns;
      });
    });
  }
});

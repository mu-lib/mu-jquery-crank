(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-crank/jquery.crank"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-jquery-wire/jquery.wire"], this, function (wire) {
  var slice = Array.prototype.slice;

  return function (input, eventType) {
    var args = slice.call(arguments, 2);

    return wire.call(this, input, function ($element, index, ns) {
      return $element.constructor.when($element.triggerHandler(eventType + "." + ns, args)).then(function (result) {
        return arguments.length > 1 ? slice.call(arguments) : result || ns;
      });
    });
  }
});

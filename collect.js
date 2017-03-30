(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-crank/collect"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})([], this, function () {
  return function chain(fn) {
    return function ($event) {
      return ($event.result || []).concat(fn.apply(this, arguments));
    }
  }
});

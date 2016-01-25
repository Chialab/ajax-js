(function (scope, name) {
    if (typeof scope[name] === 'object') {
        var module = scope[name];
        for (var k in module) scope[k] = module[k]
    }
})(window, 'Ajax');

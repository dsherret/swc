//// [usingDeclarationsTopLevelOfModule.1.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    w: function() {
        return w;
    },
    x: function() {
        return x;
    },
    y: function() {
        return y;
    }
});
const _ts_add_disposable_resource = require("@swc/helpers/_/_ts_add_disposable_resource");
const _ts_dispose_resources = require("@swc/helpers/_/_ts_dispose_resources");
const env = {
    stack: [],
    error: void 0,
    hasError: false
};
try {
    var z = _ts_add_disposable_resource._(env, {
        [Symbol.dispose] () {}
    }, false);
    var y = 2;
    console.log(w, x, y, z);
} catch (e) {
    env.error = e;
    env.hasError = true;
} finally{
    _ts_dispose_resources._(env);
}
const x = 1;
const w = 3;
const _default = 4;

//// [exportsAndImports4.ts]
//// [t1.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "default", {
    enumerable: !0,
    get: function() {
        return _default;
    }
});
var _default = "hello";
//// [t2.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var _t1 = /*#__PURE__*/ require("@swc/helpers/_/_interop_require_wildcard")._(require("./t1"));
require("./t1").default, _t1.default, _t1.default, _t1.default, _t1.default, _t1.default, _t1.default, _t1.default;
//// [t3.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var target = exports, all = {
    a: function() {
        return a;
    },
    b: function() {
        return _t1.default;
    },
    c: function() {
        return _t1;
    },
    d: function() {
        return _t1.default;
    },
    e1: function() {
        return _t1.default;
    },
    e2: function() {
        return _t1;
    },
    f1: function() {
        return _t1.default;
    },
    f2: function() {
        return _t1.default;
    }
};
for(var name in all)Object.defineProperty(target, name, {
    enumerable: !0,
    get: all[name]
});
var _t1 = /*#__PURE__*/ require("@swc/helpers/_/_interop_require_wildcard")._(require("./t1")), a = require("./t1");
a.default, _t1.default, _t1.default, _t1.default, _t1.default, _t1.default, _t1.default, _t1.default;

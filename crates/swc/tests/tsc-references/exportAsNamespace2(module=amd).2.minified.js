//// [0.ts]
define([
    "require",
    "exports"
], function(require, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var all = {
        a: function() {
            return a;
        },
        b: function() {
            return b;
        }
    };
    for(var name in all)Object.defineProperty(exports, name, {
        enumerable: !0,
        get: all[name]
    });
    var a = 1, b = 2;
});
//// [1.ts]
define([
    "require",
    "exports",
    "@swc/helpers/_/_interop_require_wildcard",
    "./0"
], function(require, exports, _interop_require_wildcard, _0) {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), Object.defineProperty(exports, "ns", {
        enumerable: !0,
        get: function() {
            return _0;
        }
    }), _0 = /*#__PURE__*/ _interop_require_wildcard._(_0), ns.a, ns.b;
});
//// [2.ts]
define([
    "require",
    "exports",
    "@swc/helpers/_/_interop_require_wildcard",
    "./1"
], function(require, exports, _interop_require_wildcard, _1) {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), (_1 = /*#__PURE__*/ _interop_require_wildcard._(_1)).ns.a, _1.ns.b;
});

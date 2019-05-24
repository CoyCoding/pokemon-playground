(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./assets/js/test.js");\n/* harmony import */ var _monster_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster/monster */ "./assets/js/monster/monster.js");\n\n\nconsole.log();\nvar test = new _monster_monster__WEBPACK_IMPORTED_MODULE_1__[/* Monster */ "a"](\'ted\');\nconsole.log(test.getName());\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    },
    "./assets/js/monster/monster.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });\nclass Monster {\n  constructor(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/monster/monster.js?');
    },
    "./assets/js/test.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* unused harmony export add */\nfunction add() {\n  return 'add';\n}\n\n//# sourceURL=webpack:///./assets/js/test.js?");
    }
});
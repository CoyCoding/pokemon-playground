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
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./assets/js/test.js");\n/* harmony import */ var _monster_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster/monster */ "./assets/js/monster/monster.js");\n/* harmony import */ var _monster_monsterLocators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monster/monsterLocators */ "./assets/js/monster/monsterLocators.js");\n\n\n\nconsole.log();\n\ntry {\n  var test = Object(_monster_monsterLocators__WEBPACK_IMPORTED_MODULE_2__[/* findMonsterById */ "a"])(1);\n  console.log(test.getName());\n} catch (e) {\n  console.log(e.message);\n}\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    },
    "./assets/js/monster/MonsterType.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* unused harmony export Type */\n/* harmony import */ var _typeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeList */ "./assets/js/monster/typeList.js");\n/* harmony import */ var _typeList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typeList__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Type {\n  constructor(type) {\n    this.type = type;\n  }\n\n  getType() {\n    return this.type;\n  }\n\n  getWeakness() {\n    return _typeList__WEBPACK_IMPORTED_MODULE_0__["typeList"][0].strengths;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/monster/MonsterType.js?');
    },
    "./assets/js/monster/monster.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });\n/* harmony import */ var _MonsterType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterType */ "./assets/js/monster/MonsterType.js");\n\nclass Monster {\n  constructor(id, name, types) {\n    this.id = id;\n    this.name = name;\n    this.types = types; // (this.id = monster.id), (this.name = monster.name);\n  }\n\n  getName() {\n    return this.name;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/monster/monster.js?');
    },
    "./assets/js/monster/monsterList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return monsterList; });\nconst monsterList = [{\n  id: 1,\n  name: 'dynamite',\n  types: [{\n    type: 'fire',\n    weakness: 'water',\n    strengths: 'grass'\n  }]\n}, {\n  id: 2,\n  name: 'fish',\n  types: [{\n    type: 'water',\n    weakness: 'grass',\n    strengths: 'fire'\n  }]\n}];\n\n//# sourceURL=webpack:///./assets/js/monster/monsterList.js?");
    },
    "./assets/js/monster/monsterLocators.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findMonsterById; });\n/* harmony import */ var _monsterList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monsterList */ "./assets/js/monster/monsterList.js");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ "./assets/js/monster/monster.js");\n\n\nfunction findMonsterById(id) {\n  const foundMonster = _monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"].find(monster => {\n    return id === monster.id;\n  });\n\n  if (foundMonster) {\n    console.log(foundMonster);\n    return new _monster__WEBPACK_IMPORTED_MODULE_1__[/* Monster */ "a"](foundMonster.id, foundMonster.name);\n  } else {\n    throw new Error(\'monster not found\');\n  }\n}\n\n//# sourceURL=webpack:///./assets/js/monster/monsterLocators.js?');
    },
    "./assets/js/monster/typeList.js": function(module, exports) {
        eval("// export const typeList =[\n//   const fire ={\n//     weakness: ['water', 'ice'],\n//     strengths: ['grass', 'bug']\n//   },\n//   const water ={\n//     weakness: ['grass', 'ice'],\n//     strengths: ['fire', 'poison']\n//   }\n// ]\n\n//# sourceURL=webpack:///./assets/js/monster/typeList.js?");
    },
    "./assets/js/test.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* unused harmony export add */\nfunction add() {\n  return 'add';\n}\n\n//# sourceURL=webpack:///./assets/js/test.js?");
    }
});
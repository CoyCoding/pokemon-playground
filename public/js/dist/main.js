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
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./assets/js/test.js");\n/* harmony import */ var _monster_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster/monster */ "./assets/js/monster/monster.js");\n/* harmony import */ var _monster_monsterLocators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monster/monsterLocators */ "./assets/js/monster/monsterLocators.js");\n\n\n\nconsole.log(); // try {\n\nvar test = Object(_monster_monsterLocators__WEBPACK_IMPORTED_MODULE_2__[/* findMonsterById */ "a"])(1); //console.log(test.getWeakness());\n\ntest.getWeakness(); // } catch (e) {\n// \tconsole.log(e.message);\n// }\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    },
    "./assets/js/monster/MonsterType.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* unused harmony export Type */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTypeArray; });\n/* harmony import */ var _typeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeList */ "./assets/js/monster/typeList.js");\n //Type takes id and the type to build a type object\n\nclass Type {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n  } //returns string value of type\n\n\n  getType() {\n    return this.type;\n  } //takes the id of the current type and finds its weaknesses\n  //retunrs an array of Types\n\n\n  getWeakness() {\n    return _typeList__WEBPACK_IMPORTED_MODULE_0__[/* typeList */ "a"][this.id].weakness;\n  }\n\n} //stores  as an array of types\n\nfunction createTypeArray(type) {\n  let i = 0;\n  let numOfTypes = type.length;\n  let typeArr = new Array();\n\n  for (i; i < numOfTypes; i++) {\n    typeArr.push(new Type(type[i].id, type[i].name));\n  }\n\n  return typeArr;\n}\n\n//# sourceURL=webpack:///./assets/js/monster/MonsterType.js?');
    },
    "./assets/js/monster/monster.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });\n/* harmony import */ var _MonsterType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterType */ "./assets/js/monster/MonsterType.js");\n\n\nclass Monster {\n  constructor(id, name, types) {\n    this.id = id;\n    this.name = name;\n    this.types = Object(_MonsterType__WEBPACK_IMPORTED_MODULE_0__[/* createTypeArray */ "a"])(types);\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  getWeakness() {\n    let typeArr = [];\n    this.types.forEach(type => {\n      type.getWeakness().forEach(weakness => {\n        typeArr.push(weakness);\n      });\n    });\n    console.log(typeArr);\n    return typeArr;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/monster/monster.js?');
    },
    "./assets/js/monster/monsterList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return monsterList; });\nconst monsterList = [{\n  id: 1,\n  name: 'dynamite',\n  types: [{\n    id: 1,\n    name: 'fire'\n  }]\n}, {\n  id: 2,\n  name: 'fish',\n  types: [{\n    id: 2,\n    name: 'water'\n  }]\n}];\n\n//# sourceURL=webpack:///./assets/js/monster/monsterList.js?");
    },
    "./assets/js/monster/monsterLocators.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findMonsterById; });\n/* harmony import */ var _monsterList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monsterList */ "./assets/js/monster/monsterList.js");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ "./assets/js/monster/monster.js");\n\n\nfunction findMonsterById(id) {\n  const foundMonster = _monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"].find(monster => {\n    return id === monster.id;\n  });\n\n  if (foundMonster) {\n    return new _monster__WEBPACK_IMPORTED_MODULE_1__[/* Monster */ "a"](foundMonster.id, foundMonster.name, foundMonster.types);\n  } else {\n    throw new Error(\'monster not found\');\n  }\n}\n\n//# sourceURL=webpack:///./assets/js/monster/monsterLocators.js?');
    },
    "./assets/js/monster/typeList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return typeList; });\nconst typeList = {\n  1: {\n    weakness: [{\n      id: 2,\n      name: 'water'\n    }, {\n      id: 3,\n      name: 'ice'\n    }],\n    strengths: [{\n      id: 4,\n      name: 'grass'\n    }, {\n      id: 5,\n      name: 'bug'\n    }]\n  },\n  2: {\n    weakness: [{\n      id: 4,\n      name: 'grass'\n    }, {\n      id: 5,\n      name: 'bug'\n    }],\n    strengths: [{\n      id: 1,\n      name: 'fire'\n    }, {\n      id: 6,\n      name: 'poison'\n    }]\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/typeList.js?");
    },
    "./assets/js/test.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* unused harmony export add */\nfunction add() {\n  return 'add';\n}\n\n//# sourceURL=webpack:///./assets/js/test.js?");
    }
});
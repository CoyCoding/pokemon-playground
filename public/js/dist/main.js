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
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monster_monsterLocators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster/monsterLocators */ \"./assets/js/monster/monsterLocators.js\");\n/* harmony import */ var _monster_modles_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster/modles/move */ \"./assets/js/monster/modles/move.js\");\n\n\n // try {\n\nvar test = Object(_monster_monsterLocators__WEBPACK_IMPORTED_MODULE_0__[/* findMonsterById */ \"a\"])(1);\ntest.addToMovePool(new _monster_modles_move__WEBPACK_IMPORTED_MODULE_1__[/* Move */ \"a\"](1, 'tackle', 'normal'));\ntest.addToMovePool(new _monster_modles_move__WEBPACK_IMPORTED_MODULE_1__[/* Move */ \"a\"](1, 'tackle', 'normal'));\ntest.addToMovePool(new _monster_modles_move__WEBPACK_IMPORTED_MODULE_1__[/* Move */ \"a\"](1, 'tackle', 'normal'));\ntest.addToMovePool(new _monster_modles_move__WEBPACK_IMPORTED_MODULE_1__[/* Move */ \"a\"](1, 'tackle', 'normal')); // } catch (e) {\n// \tconsole.log(e.message);\n// }\n\nconsole.log(test);\nconst pokemonImages = document.getElementsByClassName('poke-img');\nconst pokemonNames = document.getElementsByClassName('poke-name');\nconst pokemonTypes = document.getElementsByClassName('poke-types');\nloadPokemonImages();\n\nfunction loadPokemonImages() {\n  for (let i = 0; i < pokemonImages.length; i++) {\n    pokemonImages[i].src = test.img;\n    pokemonNames[i].innerHTML = test.name;\n    test.types.forEach(type => {\n      let text = document.createTextNode(type.name);\n      let node = createNodeWithClasses('h3', [type.name, 'poke-type']);\n      node.appendChild(text);\n      pokemonTypes[i].appendChild(node);\n    });\n  }\n} //creates a node and adds all classes in array\n\n\nfunction createNodeWithClasses(nodeType, classArr) {\n  let node = document.createElement(nodeType);\n  classArr.forEach(className => {\n    node.classList.add(className);\n  });\n  return node;\n}\n\nconsole.log(Math.floor(Math.random() * 10 + 1) + ' ' + Object(_monster_monsterLocators__WEBPACK_IMPORTED_MODULE_0__[/* monsterListLength */ \"b\"])());\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    },
    "./assets/js/monster/data/monsterList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return monsterList; });\nconst monsterList = [{\n  id: 1,\n  name: 'braixen',\n  types: [{\n    id: 1,\n    name: 'fire'\n  }, {\n    id: 2,\n    name: 'water'\n  }],\n  learnableMoves: [1, 5, 3, 4, 9, 7],\n  movePool: [],\n  img: 'https://www.smogon.com//dex/media/sprites/xy/braixen.gif'\n}, {\n  id: 2,\n  name: 'fish',\n  types: [{\n    id: 2,\n    name: 'water'\n  }]\n}];\n\n//# sourceURL=webpack:///./assets/js/monster/data/monsterList.js?");
    },
    "./assets/js/monster/data/typeList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return typeList; });\nconst typeList = {\n  fire: {\n    weakness: [{\n      id: 2,\n      name: 'water'\n    }, {\n      id: 3,\n      name: 'ice'\n    }],\n    strengths: [{\n      id: 4,\n      name: 'grass'\n    }, {\n      id: 5,\n      name: 'bug'\n    }]\n  },\n  water: {\n    weakness: [{\n      id: 4,\n      name: 'grass'\n    }, {\n      id: 5,\n      name: 'bug'\n    }],\n    strengths: [{\n      id: 1,\n      name: 'fire'\n    }, {\n      id: 6,\n      name: 'poison'\n    }]\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/data/typeList.js?");
    },
    "./assets/js/monster/modles/monster.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./assets/js/monster/modles/type.js");\n\nclass Monster {\n  constructor(id, name, types, img, learnableMovesIds, movePool) {\n    this.id = id;\n    this.name = name;\n    this.types = createTypeArray(types);\n    this.img = img;\n    this.learnableMoveIds = learnableMovesIds;\n    this.movePool = movePool;\n  }\n\n  getMovePool() {\n    return this.movePool;\n  }\n\n  addToMovePool(move) {\n    if (this.movePool.length >= 4) {\n      throw new Error(\'Move slots full\');\n    } else {\n      this.movePool.push(move);\n    }\n  }\n\n  setMovePool(movePool) {\n    this.movePool = movePool;\n  }\n\n  getWeaknesses() {\n    let typeArr = [];\n    this.types.forEach(type => {\n      type.getWeaknesses().forEach(weakness => {\n        typeArr.push(weakness);\n      });\n    });\n    console.log(typeArr);\n    return typeArr;\n  }\n\n  getStrengths() {\n    let typeArr = [];\n    this.types.forEach(type => {\n      type.getStrengths().forEach(strengths => {\n        typeArr.push(strengths);\n      });\n    });\n    console.log(typeArr);\n    return typeArr;\n  }\n\n}\n\nfunction createTypeArray(type) {\n  let i = 0;\n  let numOfTypes = type.length;\n  let typeArr = new Array();\n\n  for (i; i < numOfTypes; i++) {\n    typeArr.push(new _type__WEBPACK_IMPORTED_MODULE_0__[/* Type */ "a"](type[i].id, type[i].name));\n  }\n\n  return typeArr;\n}\n\n//# sourceURL=webpack:///./assets/js/monster/modles/monster.js?');
    },
    "./assets/js/monster/modles/move.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Move; });\nclass Move {\n  constructor(id, name, type) {\n    this.id = id;\n    this.name = name;\n    this.type = type;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/monster/modles/move.js?');
    },
    "./assets/js/monster/modles/type.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type; });\n/* harmony import */ var _data_typeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/typeList */ "./assets/js/monster/data/typeList.js");\n //Type takes id and the type to build a type object\n\nclass Type {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n  } //returns string value of type\n\n\n  getName() {\n    return this.name;\n  } // takes the id of the current type and finds its weaknesses\n  // retunrs an array of Types\n\n\n  getWeaknesses() {\n    return _data_typeList__WEBPACK_IMPORTED_MODULE_0__[/* typeList */ "a"][this.name].weakness;\n  }\n\n  getStrengths() {\n    return _data_typeList__WEBPACK_IMPORTED_MODULE_0__[/* typeList */ "a"][this.name].strengths;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/monster/modles/type.js?');
    },
    "./assets/js/monster/monsterLocators.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findMonsterById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monsterListLength; });\n/* harmony import */ var _data_monsterList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/monsterList */ "./assets/js/monster/data/monsterList.js");\n/* harmony import */ var _modles_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modles/monster */ "./assets/js/monster/modles/monster.js");\n\n\nfunction findMonsterById(id) {\n  const foundMonster = _data_monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"].find(monster => {\n    return id === monster.id;\n  });\n\n  if (foundMonster) {\n    return new _modles_monster__WEBPACK_IMPORTED_MODULE_1__[/* Monster */ "a"](foundMonster.id, foundMonster.name, foundMonster.types, foundMonster.img, foundMonster.learnableMoves, foundMonster.movePool);\n  } else {\n    throw new Error(\'monster not found\');\n  }\n}\nfunction monsterListLength() {\n  return _data_monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"].length;\n}\n\n//# sourceURL=webpack:///./assets/js/monster/monsterLocators.js?');
    }
});
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
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monster_monsterLocators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster/monsterLocators */ \"./assets/js/monster/monsterLocators.js\");\n/* harmony import */ var _monster_modles_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster/modles/move */ \"./assets/js/monster/modles/move.js\");\n/* harmony import */ var _monster_moveLocator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monster/moveLocator */ \"./assets/js/monster/moveLocator.js\");\n/* harmony import */ var _monster_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monster/utils */ \"./assets/js/monster/utils.js\");\n\n\n\n\nvar team = createPokemonTeam();\nsetTeamMovePool(team);\nconsole.log(team);\n\nfunction createPokemonTeam() {\n  let MAX_TEAM = 6;\n  let pokemonTeam = [];\n\n  for (let i = 0; i < MAX_TEAM; i++) {\n    pokemonTeam.push(_monster_monsterLocators__WEBPACK_IMPORTED_MODULE_0__[/* MonsterLocator */ \"a\"].findRandomMonster());\n  }\n\n  return pokemonTeam;\n}\n\nfunction setTeamMovePool(monsterArr) {\n  monsterArr.forEach(monster => {\n    monster.setMovePool(_monster_moveLocator__WEBPACK_IMPORTED_MODULE_2__[/* MoveLocator */ \"a\"].findRandomMoveSet(4, team[0].learnableMoveIds));\n  });\n}\n\nconst pokemonImages = document.getElementsByClassName('poke-img');\nconst pokemonNames = document.getElementsByClassName('poke-name');\nconst pokemonTypes = document.getElementsByClassName('poke-types');\nconst pokemonMoves = document.getElementsByClassName('move-grid'); //\n// function loadPokemonImages() {\n// \tfor (let i = 0; i < pokemonImages.length; i++) {\n// \t\tpokemonImages[i].src = test.img;\n// \t\tpokemonNames[i].innerHTML = test.name;\n// \t\ttest.types.forEach(type => {\n// \t\t\tlet typeName = document.createTextNode(type.name);\n// \t\t\tlet pokeTypeNode = createNodeWithClasses('h3', [type.name, 'poke-type']);\n// \t\t\tpokeTypeNode.appendChild(typeName);\n// \t\t\tpokemonTypes[i].appendChild(pokeTypeNode);\n// \t\t});\n// \t\ttest.movePool.forEach(move => {\n// \t\t\tlet moveName = document.createTextNode(move.name);\n// \t\t\tlet moveType = document.createTextNode(move.type);\n// \t\t\tlet moveNameNode = createNodeWithClasses('div', ['move-name']);\n// \t\t\tlet moveTypeNode = createNodeWithClasses('div', ['move-type']);\n// \t\t\tlet moveNametextNode = createNodeWithClasses('h3');\n// \t\t\tlet moveTypetextNode = createNodeWithClasses('h3');\n// \t\t\tmoveNametextNode.appendChild(moveName);\n// \t\t\tmoveTypetextNode.appendChild(moveType);\n// \t\t\tmoveNameNode.appendChild(moveNametextNode);\n// \t\t\tmoveTypeNode.appendChild(moveTypetextNode);\n// \t\t\tpokemonMoves[i].appendChild(moveNameNode);\n// \t\t\tpokemonMoves[i].appendChild(moveTypeNode);\n// \t\t});\n// \t}\n// }\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    },
    "./assets/js/monster/data/monsterList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return monsterList; });\nconst monsterList = [{\n  id: 1,\n  name: 'braixen',\n  types: [{\n    id: 1,\n    name: 'fire'\n  }, {\n    id: 2,\n    name: 'water'\n  }],\n  learnableMoves: [1, 5, 3, 4, 9, 7],\n  movePool: [],\n  img: 'https://www.smogon.com//dex/media/sprites/xy/braixen.gif'\n}, {\n  id: 2,\n  name: 'fish',\n  types: [{\n    id: 2,\n    name: 'water'\n  }],\n  learnableMoves: [6, 2, 3, 4, 9, 7],\n  movePool: [],\n  img: 'https://www.smogon.com//dex/media/sprites/xy/braixen.gif'\n}];\n\n//# sourceURL=webpack:///./assets/js/monster/data/monsterList.js?");
    },
    "./assets/js/monster/data/moveList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return moveList; });\nconst moveList = [{\n  id: 1,\n  name: 'tackle',\n  type: 'normal'\n}, {\n  id: 2,\n  name: 'ember',\n  type: 'fire'\n}, {\n  id: 3,\n  name: 'water gun',\n  type: 'water'\n}, {\n  id: 4,\n  name: 'leer',\n  type: 'normal'\n}, {\n  id: 5,\n  name: 'fire blast',\n  type: 'fire'\n}, {\n  id: 6,\n  name: 'dig',\n  type: 'ground'\n}, {\n  id: 7,\n  name: 'razor leaf',\n  type: 'grass'\n}, {\n  id: 8,\n  name: 'thundershock',\n  type: 'electric'\n}, {\n  id: 9,\n  name: 'mega punch',\n  type: 'fighting'\n}, {\n  id: 10,\n  name: 'mega kick'\n}];\n\n//# sourceURL=webpack:///./assets/js/monster/data/moveList.js?");
    },
    "./assets/js/monster/data/typeList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return typeList; });\nconst typeList = {\n  fire: {\n    weakness: [{\n      id: 2,\n      name: 'water'\n    }, {\n      id: 3,\n      name: 'ice'\n    }],\n    strengths: [{\n      id: 4,\n      name: 'grass'\n    }, {\n      id: 5,\n      name: 'bug'\n    }]\n  },\n  water: {\n    weakness: [{\n      id: 4,\n      name: 'grass'\n    }, {\n      id: 5,\n      name: 'bug'\n    }],\n    strengths: [{\n      id: 1,\n      name: 'fire'\n    }, {\n      id: 6,\n      name: 'poison'\n    }]\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/data/typeList.js?");
    },
    "./assets/js/monster/modles/builders/monsterBuilder.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterBuilder; });\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../monster */ "./assets/js/monster/modles/monster.js");\n/* harmony import */ var _typeBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeBuilder */ "./assets/js/monster/modles/builders/typeBuilder.js");\n/* harmony import */ var _moveBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveBuilder */ "./assets/js/monster/modles/builders/moveBuilder.js");\n\n\n\nconst MonsterBuilder = {\n  buildMonster: function buildMonster(object) {\n    console.log(buildTypes(object.types));\n\n    try {\n      return new _monster__WEBPACK_IMPORTED_MODULE_0__[/* Monster */ "a"](object.id, object.name, buildTypes(object.types), object.img, object.learnableMoves, buildMoves(object.movePool));\n    } catch (e) {\n      console.log(\'bad monster build\');\n    }\n  }\n};\n\nfunction buildTypes(arr) {\n  var typeArray = [];\n  arr.forEach(type => {\n    typeArray.push(_typeBuilder__WEBPACK_IMPORTED_MODULE_1__[/* TypeBuilder */ "a"].buildType(type));\n  });\n  return typeArray;\n}\n\nfunction buildMoves(arr) {\n  var moveArray = [];\n  arr.forEach(move => {\n    moveArray.push(_moveBuilder__WEBPACK_IMPORTED_MODULE_2__[/* MoveBuilder */ "a"].buildMove(move));\n  });\n  return moveArray;\n}\n\n//# sourceURL=webpack:///./assets/js/monster/modles/builders/monsterBuilder.js?');
    },
    "./assets/js/monster/modles/builders/moveBuilder.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveBuilder; });\n/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../move */ "./assets/js/monster/modles/move.js");\n\nconst MoveBuilder = {\n  buildMove: function buildMove(object) {\n    try {\n      return new _move__WEBPACK_IMPORTED_MODULE_0__[/* Move */ "a"](object.id, object.name, object.type);\n    } catch (e) {\n      console.log(\'bad move build\');\n    }\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/modles/builders/moveBuilder.js?');
    },
    "./assets/js/monster/modles/builders/typeBuilder.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeBuilder; });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ "./assets/js/monster/modles/type.js");\n\nconst TypeBuilder = {\n  buildType: function buildType(object) {\n    try {\n      return new _type__WEBPACK_IMPORTED_MODULE_0__[/* Type */ "a"](object.id, object.name);\n    } catch (e) {\n      console.log(\'bad type build\');\n    }\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/modles/builders/typeBuilder.js?');
    },
    "./assets/js/monster/modles/monster.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./assets/js/monster/modles/type.js");\n/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move */ "./assets/js/monster/modles/move.js");\n\n\nclass Monster {\n  constructor(id, name, types, img, learnableMovesIds, movePool) {\n    this.id = id;\n    this.name = name;\n    this.types = types;\n    this.img = img;\n    this.learnableMoveIds = learnableMovesIds;\n    this.movePool = movePool;\n    this.MAX_MOVES = 4;\n  }\n\n  getMovePool() {\n    return this.movePool;\n  }\n\n  addToMovePool(move) {\n    if (this.movePool.length >= this.MAX_MOVES) {\n      throw new Error(\'Move slots full\');\n    } else if (this.movePool.some(move => move[\'id\'] === move.id)) {\n      throw new Error(\'you know this move\');\n    } else {\n      this.movePool.push(move);\n    }\n  }\n\n  setMovePool(movePool) {\n    this.movePool = movePool;\n  }\n\n  getWeaknesses() {\n    let typeArr = [];\n    this.types.forEach(type => {\n      type.getWeaknesses().forEach(weakness => {\n        typeArr.push(weakness);\n      });\n    });\n    return typeArr;\n  }\n\n  getStrengths() {\n    let typeArr = [];\n    this.types.forEach(type => {\n      type.getStrengths().forEach(strengths => {\n        typeArr.push(strengths);\n      });\n    });\n    console.log(typeArr);\n    return typeArr;\n  }\n\n}\n\nfunction createTypeArray(type) {\n  let i = 0;\n  let numOfTypes = type.length;\n  let typeArr = new Array();\n\n  for (i; i < numOfTypes; i++) {\n    typeArr.push(new _type__WEBPACK_IMPORTED_MODULE_0__[/* Type */ "a"](type[i].id, type[i].name));\n  }\n\n  return typeArr;\n}\n\n//# sourceURL=webpack:///./assets/js/monster/modles/monster.js?');
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
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterLocator; });\n/* harmony import */ var _data_monsterList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/monsterList */ "./assets/js/monster/data/monsterList.js");\n/* harmony import */ var _modles_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modles/monster */ "./assets/js/monster/modles/monster.js");\n/* harmony import */ var _modles_builders_monsterBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modles/builders/monsterBuilder */ "./assets/js/monster/modles/builders/monsterBuilder.js");\n\n\n\nconst MonsterLocator = {\n  findMonsterById: function findMonsterById(id) {\n    const foundMonster = _data_monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"].find(monster => {\n      return id === monster.id;\n    });\n\n    if (foundMonster) {\n      return _modles_builders_monsterBuilder__WEBPACK_IMPORTED_MODULE_2__[/* MonsterBuilder */ "a"].buildMonster(foundMonster);\n    } else {\n      throw new Error(\'monster not found\');\n    }\n  },\n  monsterListLength: function monsterListLength() {\n    return _data_monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"].length;\n  },\n  findRandomMonster: function findRandomMonster() {\n    let index = Math.floor(Math.random() * this.monsterListLength());\n    return _modles_builders_monsterBuilder__WEBPACK_IMPORTED_MODULE_2__[/* MonsterBuilder */ "a"].buildMonster(this.findMonsterByIndex(index));\n  },\n  findMonsterByIndex: function findMonsterByIndex(index) {\n    if (index < this.monsterListLength() && index >= 0) {\n      return _data_monsterList__WEBPACK_IMPORTED_MODULE_0__[/* monsterList */ "a"][index];\n    } else {\n      throw new Error(\'bad Index\');\n    }\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/monsterLocators.js?');
    },
    "./assets/js/monster/moveLocator.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveLocator; });\n/* harmony import */ var _data_moveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/moveList */ "./assets/js/monster/data/moveList.js");\n/* harmony import */ var _modles_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modles/move */ "./assets/js/monster/modles/move.js");\n/* harmony import */ var _modles_builders_moveBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modles/builders/moveBuilder */ "./assets/js/monster/modles/builders/moveBuilder.js");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./assets/js/monster/utils.js");\n\n\n\n\nconst MoveLocator = {\n  findMoveById: function findMoveById(id) {\n    const foundMove = _data_moveList__WEBPACK_IMPORTED_MODULE_0__[/* moveList */ "a"].find(move => {\n      return id === move.id;\n    });\n\n    if (foundMove) {\n      return _modles_builders_moveBuilder__WEBPACK_IMPORTED_MODULE_2__[/* MoveBuilder */ "a"].buildMove(foundMove);\n    } else {\n      throw new Error(\'move not found\');\n    }\n  },\n  findRandomMoves: function findRandomMoves() {\n    let index = Math.floor(Math.random() * this.moveListLength());\n    return _modles_builders_moveBuilder__WEBPACK_IMPORTED_MODULE_2__[/* MoveBuilder */ "a"].buildMove(this.findMoveByIndex(index));\n  },\n  findRandomMoveSet: function findRandomMoveSet(numOfMoves, moveList) {\n    var moveList = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* shuffle */ "a"])(moveList, numOfMoves).slice(0, numOfMoves);\n\n    for (let i = 0; i < moveList.length; i++) {\n      moveList[i] = this.findMoveById(moveList[i]);\n    }\n\n    return moveList;\n  },\n  moveListLength: function moveListLength() {\n    return _data_moveList__WEBPACK_IMPORTED_MODULE_0__[/* moveList */ "a"].length;\n  },\n  findMoveByIndex: function findMoveByIndex(index) {\n    if (index < this.moveListLength() && index >= 0) {\n      return _data_moveList__WEBPACK_IMPORTED_MODULE_0__[/* moveList */ "a"][index];\n    } else {\n      throw new Error(\'bad move Index\');\n    }\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/monster/moveLocator.js?');
    },
    "./assets/js/monster/utils.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shuffle; });\n/* unused harmony export createNodeWithClasses */\n// shuffle the first 4 numbers for movepool\nfunction shuffle(arr) {\n  let num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var j, x, i;\n\n  for (i = 0; i < num; i++) {\n    j = Math.floor(Math.random() * (arr.length - 1 - i)) + i;\n    x = arr[i];\n    arr[i] = arr[j];\n    arr[j] = x;\n  }\n\n  return arr;\n}\nfunction createNodeWithClasses(nodeType, classArr) {\n  let node = document.createElement(nodeType);\n\n  if (classArr) {\n    classArr.forEach(className => {\n      node.classList.add(className);\n    });\n  }\n\n  return node;\n}\n\n//# sourceURL=webpack:///./assets/js/monster/utils.js?');
    }
});
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
    "./assets/js/main.js": function(module, exports) {
        eval("// import { MonsterLocator } from './monster/monsterLocators';\n// const PokemonApi = require('pokeapi-js-wrapper');\n//\n// const options = {\n// \tprotocol: 'https',\n// \tversionPath: '/api/v2/',\n// \tcache: false,\n// \ttimeout: 5 * 1000 // 5s\n// };\n//\n// var monsterLocator = new MonsterLocator(new PokemonApi.Pokedex(options));\n//\n// const pokeballBtn = document.getElementsByClassName('ball-btn');\n// initPokeballs();\n// monsterLocator.locateRandomPokemon();\n//\n// function initPokeballs() {\n// \tfor (let i = 0; i < pokeballBtn.length; i++) {\n// \t\tpokeballBtn[i].addEventListener('click', placePokemonInBall);\n// \t}\n//\n// \tfunction placePokemonInBall() {\n// \t\tthis.removeEventListener('click', placePokemonInBall);\n// \t\tlet currentImgNode = getClosest(this, '.poke-img');\n// \t\tlet currentNameNode = getClosest(this, '.name-wrapper');\n// \t\tlet currentTypeNode = getClosest(this, '.poke-types');\n// \t\tlet currentMoveNode = getClosest(this, '.moves');\n// \t\tlet monster = createMonsterWithMoves();\n// \t\tMonsterDom.setNameNode(monster, currentNameNode);\n// \t\tMonsterDom.setTypeNodes(monster, currentTypeNode);\n// \t\tMonsterDom.setMoveNodes(monster.movePool, currentMoveNode);\n// \t\tMonsterDom.setImageNode(monster.img, currentImgNode);\n// \t\tinitNodes([currentNameNode, currentTypeNode, currentMoveNode]);\n// \t\tgetCurrentPokeBall(this).classList.add('opened');\n// \t\tcurrentImgNode.classList.add('opened');\n// \t}\n//\n// \tfunction getClosest(node, className) {\n// \t\treturn node.closest('.monster-info').querySelector(className);\n// \t}\n//\n// \tfunction getCurrentPokeBall(node) {\n// \t\treturn node.closest('.ball');\n// \t}\n//\n// \tfunction initNodes(nodeArr) {\n// \t\tnodeArr.forEach(node => {\n// \t\t\tnode.classList.add('loaded');\n// \t\t});\n// \t}\n// }\n//\n// //Action/Event based functions;\n// function createPokemonTeam() {\n// \t//creates a 6 monster team with no moves.\n// \t// return MonsterGenerator.generateMonsters(6);\n// }\n//\n// function createMovePoolFor(monsterArr) {\n// \t//Gives monster or array of monsters a move P\n// \t//MonsterModifier.generateRandomMoves(monsterArr, 4);\n// }\n//\n// function createMonsterWithMoves() {\n// \t// var monster = MonsterGenerator.generateMonsters(1);\n// \t// createMovePoolFor(monster);\n// \t// return monster;\n// }\n// //HTML based functions\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});
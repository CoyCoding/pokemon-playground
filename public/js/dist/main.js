(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{enumerable:true,get:getter})};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=9)})({9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);const monsterList=[{id:1,name:"braixen",types:[{id:1,name:"fire"},{id:2,name:"water"}],learnableMoves:[1,5,3,4,9,7],movePool:[]},{id:2,name:"Alomomola",types:[{id:2,name:"water"}],learnableMoves:[6,2,3,4,9,7],movePool:[]},{id:2,name:"Abomasnow",types:[{id:0,name:"grass"},{id:0,name:"ice"}],learnableMoves:[6,2,3,4,9,7],movePool:[]},{id:3,name:"Abra",types:[{id:2,name:"psychic"}],learnableMoves:[6,2,3,4,9,7],movePool:[]},{id:4,name:"aron",types:[{id:0,name:"steel"},{id:0,name:"rock"}],learnableMoves:[6,2,3,4,9,7],movePool:[]},{id:4,name:"beedrill",types:[{id:0,name:"steel"},{id:0,name:"rock"}],learnableMoves:[6,2,3,4,9,7],movePool:[]}];class Monster{constructor(id,name,types,imgSrc,learnableMovesIds,movePool){this.id=id;this.name=name;this.types=types;this.img=imgSrc;this.learnableMoveIds=learnableMovesIds;this.movePool=movePool;this.MAX_MOVES=4}getMovePool(){return this.movePool}addToMovePool(move){if(this.movePool.length>=this.MAX_MOVES)throw new Error("Move slots full");else if(this.movePool.some(move=>move["id"]===move.id))throw new Error("you know this move");else this.movePool.push(move)}setMovePool(movePool){this.movePool=movePool}getWeaknesses(){let typeArr=[];this.types.forEach(type=>{type.getWeaknesses().forEach(weakness=>{typeArr.push(weakness)})});return typeArr}getStrengths(){let typeArr=[];this.types.forEach(type=>{type.getStrengths().forEach(strengths=>{typeArr.push(strengths)})});console.log(typeArr);return typeArr}}const TypeMap={fire:{weakness:[{id:2,name:"water"},{id:3,name:"ice"}],strengths:[{id:4,name:"grass"},{id:5,name:"bug"}]},water:{weakness:[{id:4,name:"grass"},{id:5,name:"bug"}],strengths:[{id:1,name:"fire"},{id:6,name:"poison"}]}};class type_Type{constructor(id,name){this.id=id;this.name=name}getName(){return this.name}getWeaknesses(){return TypeMap[this.name].weakness}getStrengths(){return TypeMap[this.name].strengths}}const TypeBuilder={buildType:function(object){try{return new type_Type(object.id,object.name)}catch(e){console.log("bad type build")}}};class Move{constructor(id,name,type){this.id=id;this.name=name;this.type=type}}const MoveBuilder={buildMove:function(object){try{return new Move(object.id,object.name,object.type)}catch(e){console.log("bad move build")}}};const MonsterBuilder={buildMonster:function(object){try{return new Monster(object.id,object.name,buildTypes(object.types),buildImgSrc(object.name),object.learnableMoves,buildMoves(object.movePool))}catch(e){console.log("bad monster build")}}};function buildTypes(arr){var typeArray=[];arr.forEach(type=>{typeArray.push(TypeBuilder.buildType(type))});return typeArray}function buildMoves(arr){var moveArray=[];arr.forEach(move=>{moveArray.push(MoveBuilder.buildMove(move))});return moveArray}function buildImgSrc(name){return"https://www.smogon.com/dex/media/sprites/xy/"+name.toLowerCase()+".gif"}const MonsterLocator={findMonsterById:function(id){const foundMonster=monsterList.find(monster=>{return id===monster.id});if(foundMonster)return MonsterBuilder.buildMonster(foundMonster);else throw new Error("monster not found")},monsterListLength:function(){return monsterList.length},findRandomMonster:function(){let index=Math.floor(Math.random()*this.monsterListLength());return MonsterBuilder.buildMonster(this.findMonsterByIndex(index))},findMonsterByIndex:function(index){if(index<this.monsterListLength()&&index>=0)return monsterList[index];else throw new Error("bad Index")}};const moveList_moveList=[{id:1,name:"tackle",type:"normal"},{id:2,name:"ember",type:"fire"},{id:3,name:"water gun",type:"water"},{id:4,name:"leer",type:"normal"},{id:5,name:"fire blast",type:"fire"},{id:6,name:"dig",type:"ground"},{id:7,name:"razor leaf",type:"grass"},{id:8,name:"thundershock",type:"electric"},{id:9,name:"mega punch",type:"fighting"},{id:10,name:"mega kick"}];function shuffle(arr){let num=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;var j,x,i;for(i=0;i<num;i++){j=Math.floor(Math.random()*(arr.length-1-i))+i;x=arr[i];arr[i]=arr[j];arr[j]=x}return arr}function createNodeWithClasses(nodeType,classArr){let node=document.createElement(nodeType);if(classArr)classArr.forEach(className=>{node.classList.add(className)});return node}const MoveLocator={findMoveById:function(id){const foundMove=moveList_moveList.find(move=>{return id===move.id});if(foundMove)return MoveBuilder.buildMove(foundMove);else throw new Error("move not found")},findRandomMoves:function(){let index=Math.floor(Math.random()*this.moveListLength());return MoveBuilder.buildMove(this.findMoveByIndex(index))},findRandomMoveSet:function(numOfMoves,moveList){moveList=shuffle(moveList,numOfMoves).slice(0,numOfMoves);for(let i=0;i<moveList.length;i++)moveList[i]=this.findMoveById(moveList[i]);return moveList},moveListLength:function(){return moveList_moveList.length},findMoveByIndex:function(index){if(index<this.moveListLength()&&index>=0)return moveList_moveList[index];else throw new Error("bad move Index")}};const MonsterGenerator={generateMonsters:function(){let num=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(num>1){let monsterArr=[];for(let i=0;i<num;i++)monsterArr.push(MonsterLocator.findRandomMonster());return monsterArr}else return MonsterLocator.findRandomMonster()},generateMoves:function(_generateMoves){function generateMoves(){return _generateMoves.apply(this,arguments)}generateMoves.toString=function(){return _generateMoves.toString()};return generateMoves}(function(monsterArr){if(Array.isArray(monster))monsterArr.forEach(monster=>{generateMoves(monster)});else monster.setMovePool(MoveLocator.findRandomMoveSet(4,monster.learnableMoveIds))})};const MoveLocator_MoveLocator={findMoveById:function(id){const foundMove=moveList_moveList.find(move=>{return id===move.id});if(foundMove)return MoveBuilder.buildMove(foundMove);else throw new Error("move not found")},findRandomMoves:function(){let index=Math.floor(Math.random()*this.moveListLength());return MoveBuilder.buildMove(this.findMoveByIndex(index))},findRandomMoveSet:function(numOfMoves,moveList){moveList=shuffle(moveList,numOfMoves).slice(0,numOfMoves);for(let i=0;i<moveList.length;i++)moveList[i]=this.findMoveById(moveList[i]);return moveList},moveListLength:function(){return moveList_moveList.length},findMoveByIndex:function(index){if(index<this.moveListLength()&&index>=0)return moveList_moveList[index];else throw new Error("bad move Index")}};const MonsterModifier={generateRandomMoves:function(monsters){if(Array.isArray(monsters))monsters.forEach(monster=>{this.generateRandomMoves(monster)});else monsters.setMovePool(MoveLocator_MoveLocator.findRandomMoveSet(4,monsters.learnableMoveIds))}};const MonsterDom={setNameNode:function(monster,node){let name=document.createTextNode(monster.name);let nameNode=createNodeWithClasses("h3",["poke-name"]);nameNode.appendChild(name);node.appendChild(nameNode)},setTypeNode:function(pokemonType,node){let typeName=document.createTextNode(pokemonType.name);let pokeTypeNode=createNodeWithClasses("h3",[pokemonType.name,"poke-type"]);pokeTypeNode.appendChild(typeName);node.appendChild(pokeTypeNode)},setImageNode:function(imgSrc,node){node.style.backgroundImage="url("+imgSrc+")"},setMoveNode:function(move,node){let moveName=document.createTextNode(move.name);let moveType=document.createTextNode(move.type);let moveNameNode=createNodeWithClasses("div",["move-name"]);let moveTypeNode=createNodeWithClasses("div",["move-type",move.type]);let moveNametextNode=createNodeWithClasses("h3");let moveTypetextNode=createNodeWithClasses("h3");moveNametextNode.appendChild(moveName);moveTypetextNode.appendChild(moveType);moveNameNode.appendChild(moveNametextNode);moveTypeNode.appendChild(moveTypetextNode);node.appendChild(moveNameNode);node.appendChild(moveTypeNode)},setMoveNodes:function(moveArray,node){moveArray.forEach(move=>{this.setMoveNode(move,node)})},setTypeNodes:function(pokemon,node){console.log(pokemon);pokemon.types.forEach(type=>{this.setTypeNode(type,node)})}};const pokeballBtn=document.getElementsByClassName("ball-btn");initPokeballs();function initPokeballs(){for(let i=0;i<pokeballBtn.length;i++)pokeballBtn[i].addEventListener("click",placePokemonInBall);function placePokemonInBall(){this.removeEventListener("click",placePokemonInBall);let currentImgNode=getClosest(this,".poke-img");let currentNameNode=getClosest(this,".name-wrapper");let currentTypeNode=getClosest(this,".poke-types");let currentMoveNode=getClosest(this,".moves");let monster=createMonsterWithMoves();MonsterDom.setNameNode(monster,currentNameNode);MonsterDom.setTypeNodes(monster,currentTypeNode);MonsterDom.setMoveNodes(monster.movePool,currentMoveNode);MonsterDom.setImageNode(monster.img,currentImgNode);initNodes([currentNameNode,currentTypeNode,currentMoveNode]);getCurrentPokeBall(this).classList.add("opened");currentImgNode.classList.add("opened")}function getClosest(node,className){return node.closest(".monster-info").querySelector(className)}function getCurrentPokeBall(node){return node.closest(".ball")}function initNodes(nodeArr){nodeArr.forEach(node=>{node.classList.add("loaded")})}}function createMovePoolFor(monsterArr){MonsterModifier.generateRandomMoves(monsterArr,4)}function createMonsterWithMoves(){var monster=MonsterGenerator.generateMonsters(1);createMovePoolFor(monster);return monster}}});
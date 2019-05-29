// import { MonsterLocator } from './monster/monsterLocators';
// const PokemonApi = require('pokeapi-js-wrapper');
//
// const options = {
// 	protocol: 'https',
// 	versionPath: '/api/v2/',
// 	cache: false,
// 	timeout: 5 * 1000 // 5s
// };
//
// var monsterLocator = new MonsterLocator(new PokemonApi.Pokedex(options));
//
// const pokeballBtn = document.getElementsByClassName('ball-btn');
// initPokeballs();
// monsterLocator.locateRandomPokemon();
//
// function initPokeballs() {
// 	for (let i = 0; i < pokeballBtn.length; i++) {
// 		pokeballBtn[i].addEventListener('click', placePokemonInBall);
// 	}
//
// 	function placePokemonInBall() {
// 		this.removeEventListener('click', placePokemonInBall);
// 		let currentImgNode = getClosest(this, '.poke-img');
// 		let currentNameNode = getClosest(this, '.name-wrapper');
// 		let currentTypeNode = getClosest(this, '.poke-types');
// 		let currentMoveNode = getClosest(this, '.moves');
// 		let monster = createMonsterWithMoves();
// 		MonsterDom.setNameNode(monster, currentNameNode);
// 		MonsterDom.setTypeNodes(monster, currentTypeNode);
// 		MonsterDom.setMoveNodes(monster.movePool, currentMoveNode);
// 		MonsterDom.setImageNode(monster.img, currentImgNode);
// 		initNodes([currentNameNode, currentTypeNode, currentMoveNode]);
// 		getCurrentPokeBall(this).classList.add('opened');
// 		currentImgNode.classList.add('opened');
// 	}
//
// 	function getClosest(node, className) {
// 		return node.closest('.monster-info').querySelector(className);
// 	}
//
// 	function getCurrentPokeBall(node) {
// 		return node.closest('.ball');
// 	}
//
// 	function initNodes(nodeArr) {
// 		nodeArr.forEach(node => {
// 			node.classList.add('loaded');
// 		});
// 	}
// }
//
// //Action/Event based functions;
// function createPokemonTeam() {
// 	//creates a 6 monster team with no moves.
// 	// return MonsterGenerator.generateMonsters(6);
// }
//
// function createMovePoolFor(monsterArr) {
// 	//Gives monster or array of monsters a move P
// 	//MonsterModifier.generateRandomMoves(monsterArr, 4);
// }
//
// function createMonsterWithMoves() {
// 	// var monster = MonsterGenerator.generateMonsters(1);
// 	// createMovePoolFor(monster);
// 	// return monster;
// }
// //HTML based functions

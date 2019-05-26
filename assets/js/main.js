import { MonsterLocator } from './monster/monsterLocators';
import { Move } from './monster/modles/move';
import { shuffle } from './monster/utils';
import { findMoveById } from './monster/moveLocator';
import { createNodeWithClasses } from './monster/utils';

// var test = findMonsterById(1);
// var movePool = createRandomMovePool(test.learnableMoveIds);
// test.setMovePool(movePool);
// console.log(test.movePool);
console.log(MonsterLocator.findRandomMonster());

// function createPokemonTeam(){
// 	let MAX_TEAM = 6;
// 	let pokemonTeam = [];
// 	for(let i =0; i < MAX_TEAM; i++){
//
// 	}
// }
//
// function createRandomMovePool(movesList) {
// 	//select Random Move Pool selects 4
// 	//random moves from Learnable to create a moveset
//
// 	var moveList = shuffle(movesList, test.MAX_MOVES).slice(0, 4);
// 	for (let i = 0; i < moveList.length; i++) {
// 		moveList[i] = findMoveById(moveList[i]);
// 	}
// 	return moveList;
// }
//
// const pokemonImages = document.getElementsByClassName('poke-img');
// const pokemonNames = document.getElementsByClassName('poke-name');
// const pokemonTypes = document.getElementsByClassName('poke-types');
// const pokemonMoves = document.getElementsByClassName('move-grid');
// loadPokemonImages();
//
// function
//
//
// function loadPokemonImages() {
// 	for (let i = 0; i < pokemonImages.length; i++) {
// 		pokemonImages[i].src = test.img;
// 		pokemonNames[i].innerHTML = test.name;
// 		test.types.forEach(type => {
// 			let typeName = document.createTextNode(type.name);
// 			let pokeTypeNode = createNodeWithClasses('h3', [type.name, 'poke-type']);
// 			pokeTypeNode.appendChild(typeName);
// 			pokemonTypes[i].appendChild(pokeTypeNode);
// 		});
// 		test.movePool.forEach(move => {
// 			let moveName = document.createTextNode(move.name);
// 			let moveType = document.createTextNode(move.type);
// 			let moveNameNode = createNodeWithClasses('div', ['move-name']);
// 			let moveTypeNode = createNodeWithClasses('div', ['move-type']);
// 			let moveNametextNode = createNodeWithClasses('h3');
// 			let moveTypetextNode = createNodeWithClasses('h3');
// 			moveNametextNode.appendChild(moveName);
// 			moveTypetextNode.appendChild(moveType);
// 			moveNameNode.appendChild(moveNametextNode);
// 			moveTypeNode.appendChild(moveTypetextNode);
// 			pokemonMoves[i].appendChild(moveNameNode);
// 			pokemonMoves[i].appendChild(moveTypeNode);
// 		});
// 	}
// }

//creates a node and adds all classes in array

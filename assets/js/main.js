import { MonsterLocator } from './monster/monsterLocators';
import { Move } from './monster/modles/move';
import { MoveLocator } from './monster/moveLocator';
import { createNodeWithClasses } from './monster/utils';

var team = createPokemonTeam();
setTeamMovePool(team);
console.log(team);

function createPokemonTeam() {
	let MAX_TEAM = 6;
	let pokemonTeam = [];
	for (let i = 0; i < MAX_TEAM; i++) {
		pokemonTeam.push(MonsterLocator.findRandomMonster());
	}
	return pokemonTeam;
}

function setTeamMovePool(monsterArr) {
	monsterArr.forEach(monster => {
		monster.setMovePool(
			MoveLocator.findRandomMoveSet(4, team[0].learnableMoveIds)
		);
	});
}

const pokemonImages = document.getElementsByClassName('poke-img');
const pokemonNames = document.getElementsByClassName('poke-name');
const pokemonTypes = document.getElementsByClassName('poke-types');
const pokemonMoves = document.getElementsByClassName('move-grid');
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

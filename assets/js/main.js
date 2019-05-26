import { MonsterLocator } from './monster/monsterLocators';
import { MoveLocator } from './monster/moveLocator';
import { createNodeWithClasses } from './monster/utils';

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
			MoveLocator.findRandomMoveSet(4, monster.learnableMoveIds)
		);
	});
}

function createMovePool(monster) {
	return MoveLocator.findRandomMoveSet(4, monster.learnableMoveIds);
}

const pokemonImages = document.getElementsByClassName('poke-img');
const pokemonNames = document.getElementsByClassName('poke-name');
const pokemonTypes = document.getElementsByClassName('poke-types');
const pokemonMoves = document.getElementsByClassName('move-grid');
const pokeballBtn = document.getElementsByClassName('ball-btn');
//loadPokemonImages();

$('.ball-btn').click(() => {
	let monster = MonsterLocator.findRandomMonster();
	monster.setMovePool(createMovePool(monster));
	loadPokemon(monster);
	alert('click');
});

function loadPokemon(pokemon, node) {
	setImageNode(pokemon.img, pokemonImages[0]);
}

function loadPokemonImages() {
	let team = createPokemonTeam();
	setTeamMovePool(team);
	for (let i = 0; i < pokemonImages.length; i++) {
		setImageNode(team[i].img, pokemonImages[i]);
		setNameNode(team[i].name, pokemonNames[i]);
		setTypeNodes(team[i].types, pokemonTypes[i]);
		setMoveNodes(team[i].movePool, pokemonMoves[i]);
	}
}

function setTypeNodes(pokemonType, node) {
	pokemonType.forEach(type => {
		setTypeNode(type, node);
	});
}

function setTypeNode(pokemonType, node) {
	let typeName = document.createTextNode(pokemonType.name);
	let pokeTypeNode = createNodeWithClasses('h3', [
		pokemonType.name,
		'poke-type'
	]);
	pokeTypeNode.appendChild(typeName);
	node.appendChild(pokeTypeNode);
}

function setImageNode(imgSrc, node) {
	node.style.backgroundImage = 'url(' + imgSrc + ')';
}

function setNameNode(pokemonName, node) {
	node.innerHTML = pokemonName;
}

function setMoveNodes(moveArray, node) {
	//appends a move array to a DOM node
	moveArray.forEach(move => {
		setMoveNode(move, node);
	});
}

function setMoveNode(move, node) {
	let moveName = document.createTextNode(move.name);
	let moveType = document.createTextNode(move.type);
	let moveNameNode = createNodeWithClasses('div', ['move-name']);
	let moveTypeNode = createNodeWithClasses('div', ['move-type']);
	let moveNametextNode = createNodeWithClasses('h3');
	let moveTypetextNode = createNodeWithClasses('h3');
	moveNametextNode.appendChild(moveName);
	moveTypetextNode.appendChild(moveType);
	moveNameNode.appendChild(moveNametextNode);
	moveTypeNode.appendChild(moveTypetextNode);
	node.appendChild(moveNameNode);
	node.appendChild(moveTypeNode);
}

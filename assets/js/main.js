// import { MonsterLocator } from './monster/monsterLocators';
// import { MoveLocator } from './monster/moveLocator';
import { MonsterGenerator } from './monster/monsterGenerator';
import { MonsterModifier } from './monster/monsterModifier';
import { createNodeWithClasses } from './monster/utils';

var monster = MonsterGenerator.generateMonsters(1);
var team = createPokemonTeam();
createMovePoolFor(monster);
console.log(team);

// const pokemonImages = document.getElementsByClassName('poke-img');
// const pokemonNames = document.getElementsByClassName('poke-name');
// const pokemonTypes = document.getElementsByClassName('poke-types');
// const pokemonMoves = document.getElementsByClassName('move-grid');
const pokeballBtn = document.getElementsByClassName('ball-btn');
pokeballsOnClick();

function pokeballsOnClick() {
	for (let i = 0; i < pokeballBtn.length; i++) {
		pokeballBtn[i].addEventListener('click', placePokemonInBall);
	}

	function placePokemonInBall() {
		this.removeEventListener('click', placePokemonInBall);
		let currentImgNode = getClosest(this, '.poke-img');
		let currentNameNode = getClosest(this, '.poke-name');
		let currentTypeNode = getClosest(this, '.poke-types');
		let currentMoveNode = getClosest(this, '.moves');
		let monster = createMonsterWithMoves();
		setNameNode(monster, currentNameNode);
		setTypeNodes(monster, currentTypeNode);
		setMoveNodes(monster.movePool, currentMoveNode);
		loadMonsterInfo(monster, currentImgNode);
		//setMoveNode(monster, currentMoveNode);
		getCurrentPokeBall(this).classList.add('opened');
		currentImgNode.classList.add('opened');
	}

	function getClosest(node, className) {
		return node.closest('.monster-info').querySelector(className);
	}

	function getCurrentPokeBall(node) {
		return node.closest('.ball');
	}
}

function loadMonsterInfo(pokemon, node) {
	setImageNode(pokemon.img, node);
}

function loadPokemonImages() {
	// let team = createPokemonTeam();
	// createMovePoolFor(team);
	// for (let i = 0; i < pokemonImages.length; i++) {
	// 	setImageNode(team[i].img, pokemonImages[i]);
	// 	setNameNode(team[i].name, pokemonNames[i]);
	// 	setTypeNodes(team[i].types, pokemonTypes[i]);
	// 	setMoveNodes(team[i].movePool, pokemonMoves[i]);
	// }
}

//Action/Event based functions;
function createPokemonTeam() {
	//creates a 6 monster team with no moves.
	return MonsterGenerator.generateMonsters(6);
}

function createMovePoolFor(monsterArr) {
	//Gives monster or array of monsters a move P
	MonsterModifier.generateRandomMoves(monsterArr, 4);
}

function createMonsterWithMoves() {
	var monster = MonsterGenerator.generateMonsters(1);
	createMovePoolFor(monster);
	return monster;
}
//HTML based functions

function setNameNode(monster, node) {
	node.innerHTML = monster.name;
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

function setMoveNodes(moveArray, node) {
	//appends a move array to a DOM node
	moveArray.forEach(move => {
		setMoveNode(move, node);
	});
}

function setTypeNodes(pokemon, node) {
	console.log(pokemon);
	pokemon.types.forEach(type => {
		setTypeNode(type, node);
	});
}

// import { MonsterLocator } from './monster/monsterLocators';
// import { MoveLocator } from './monster/moveLocator';
import { MonsterGenerator } from './monster/monsterGenerator';
import { MonsterModifier } from './monster/monsterModifier';
import { createNodeWithClasses } from './monster/utils';

console.log(createPokemonTeam());
var team = createPokemonTeam();
console.log(team);
setTeamMovePool(team);
console.log(team);

function createPokemonTeam() {
	//creates a 6 monster team with no moves.
	return MonsterGenerator.generateMonsters(6);
}

function setTeamMovePool(monsterArr) {
	MonsterModifier.generateRandomMoves(monsterArr, 4);
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

function pokeballsOnClick() {
	for (let i = 0; i < pokeballBtn.length; i++) {
		pokeballBtn[i].addEventListener('click', placePokemonInBall);
	}

	function placePokemonInBall() {
		this.removeEventListener('click', placePokemonInBall);
		let monster = MonsterLocator.findRandomMonster();
		monster.setMovePool(createMovePool(monster));

		let currentImgNode = getCurrentPokeImgNode(this);
		loadPokemon(monster, currentImgNode);
		this.closest('.ball').classList.add('opened');
		currentImgNode.classList.add('opened');
	}

	function getCurrentPokeImgNode(node) {
		return node.closest('.img-wrapper').getElementsByClassName('poke-img')[0];
	}
}

function loadPokemon(pokemon, node) {
	setImageNode(pokemon.img, node);
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

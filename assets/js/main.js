import { findMonsterById } from './monster/monsterLocators';
import { monsterListLength } from './monster/monsterLocators';
import { Move } from './monster/modles/move';
import { shuffle } from './monster/utils';
import { findMoveById } from './monster/moveLocator';

var test = findMonsterById(1);
test.addToMovePool(new Move(1, 'tackle', 'normal'));
selectRandomMovePool(test.learnableMoveIds);

function selectRandomMovePool(movesList) {
	//select Random Move Pool selects 4
	//random moves from Learnable to create a moveset
	var moveList = shuffle(movesList, test.MAX_MOVES).slice(0, 4);
	console.log(moveList);
	for (let i = 0; i < moveList.length; i++) {
		moveList[i] = findMoveById(moveList[i]);
		console.log(moveList);
	}
}

const pokemonImages = document.getElementsByClassName('poke-img');
const pokemonNames = document.getElementsByClassName('poke-name');
const pokemonTypes = document.getElementsByClassName('poke-types');
loadPokemonImages();

function loadPokemonImages() {
	for (let i = 0; i < pokemonImages.length; i++) {
		pokemonImages[i].src = test.img;
		pokemonNames[i].innerHTML = test.name;
		test.types.forEach(type => {
			let text = document.createTextNode(type.name);
			let node = createNodeWithClasses('h3', [type.name, 'poke-type']);
			node.appendChild(text);
			pokemonTypes[i].appendChild(node);
		});
	}
}

//creates a node and adds all classes in array
function createNodeWithClasses(nodeType, classArr) {
	let node = document.createElement(nodeType);
	classArr.forEach(className => {
		node.classList.add(className);
	});
	return node;
}

// import { Monster } from './monster/modles/monster';
import { findMonsterById } from './monster/monsterLocators';
import { monsterListLength } from './monster/monsterLocators';

// try {
var test = findMonsterById(1);
// } catch (e) {
// 	console.log(e.message);
// }
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
console.log(Math.floor(Math.random() * 10 + 1) + ' ' + monsterListLength());

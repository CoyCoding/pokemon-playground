// import { Monster } from './monster/modles/monster';
import { findMonsterById } from './monster/monsterLocators';
import { monsterListLength } from './monster/monsterLocators';

// try {
var test = findMonsterById(1);
test.getWeaknesses();
test.getStrengths();
console.log(test.img);
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
			let node = document.createElement('h3');
			let text = document.createTextNode(type.name);
			node.appendChild(text);
			pokemonTypes[i].appendChild(node);
		});
	}
}
console.log(Math.floor(Math.random() * 10 + 1) + ' ' + monsterListLength());

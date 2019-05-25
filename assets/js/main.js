// import { Monster } from './monster/modles/monster';
import { findMonsterById } from './monster/monsterLocators';

// try {
var test = findMonsterById(1);
test.getWeaknesses();
test.getStrengths();
console.log(test.img);
// } catch (e) {
// 	console.log(e.message);
// }

const pokemonImages = document.getElementsByClassName('poke-img');
loadPokemonImages();

function loadPokemonImages() {
	for (let i = 0; i < pokemonImages.length; i++) {
		pokemonImages[i].src = test.img;
	}
}
console.log(pokemonImages);

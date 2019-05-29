import { createNodeWithClasses } from './utils';

export const MonsterDom = {
	setNameNode: function(monster, node) {
		let name = document.createTextNode(monster.name);
		let nameNode = createNodeWithClasses('h3', ['poke-name']);
		nameNode.appendChild(name);
		node.appendChild(nameNode);
	},

	setTypeNode: function(pokemonType, node) {
		console.log(pokemonType);
		let typeName = document.createTextNode(pokemonType.name);
		let pokeTypeNode = createNodeWithClasses('h3', [
			pokemonType.name,
			'poke-type'
		]);
		pokeTypeNode.appendChild(typeName);
		node.appendChild(pokeTypeNode);
	},

	setImageNode: function(imgSrc, node) {
		node.style.backgroundImage = 'url(' + imgSrc + ')';
	},

	setMoveNode: function(move, node) {
		let moveName = document.createTextNode(move.name);
		let moveType = document.createTextNode(move.type);
		let moveNameNode = createNodeWithClasses('div', ['move-name']);
		let moveTypeNode = createNodeWithClasses('div', ['move-type', move.type]);
		let moveNametextNode = createNodeWithClasses('h3');
		let moveTypetextNode = createNodeWithClasses('h3');
		moveNametextNode.appendChild(moveName);
		moveTypetextNode.appendChild(moveType);
		moveNameNode.appendChild(moveNametextNode);
		moveTypeNode.appendChild(moveTypetextNode);
		node.appendChild(moveNameNode);
		node.appendChild(moveTypeNode);
	},

	setMoveNodes: function(moveArray, node) {
		//appends a move array to a DOM node
		moveArray.forEach(move => {
			this.setMoveNode(move, node);
		});
	},

	setTypeNodes: function(pokemon, node) {
		console.log(pokemon);
		pokemon.types.forEach(type => {
			this.setTypeNode(type, node);
		});
	}
};

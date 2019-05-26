import { monsterList } from './data/monsterList';
import { Monster } from './modles/monster';
import { MonsterBuilder } from './MonsterBuilder';

export const MonsterLocator = {
	// buildMonster: function(object) {
	// 	try {
	// 		return new Monster(
	// 			object.id,
	// 			object.name,
	// 			object.types,
	// 			object.img,
	// 			object.learnableMoves,
	// 			object.movePool
	// 		);
	// 	} catch (e) {
	// 		console.log('bad build');
	// 	}
	// },

	findMonsterById: function(id) {
		const foundMonster = monsterList.find(monster => {
			return id === monster.id;
		});
		if (foundMonster) {
			return MonsterBuilder.buildMonster(foundMonster);
		} else {
			throw new Error('monster not found');
		}
	},

	monsterListLength: function() {
		return monsterList.length;
	},

	findRandomMonster: function() {
		let index = Math.floor(Math.random() * this.monsterListLength());
		return MonsterBuilder.buildMonster(this.findMonsterByIndex(index));
	},
	findMonsterByIndex: function(index) {
		if (index < this.monsterListLength() && index >= 0) {
			return monsterList[index];
		} else {
			throw new Error('bad Index');
		}
	}

	//// TODO: Make MonsterBuilder class
};

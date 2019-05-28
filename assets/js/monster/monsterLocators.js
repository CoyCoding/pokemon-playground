import { monsterList } from './data/monsterList';
import { Monster } from './modles/monster';
import { MonsterBuilder } from './modles/builders/monsterBuilder';

export const MonsterLocator = {
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
};

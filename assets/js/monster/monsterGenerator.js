import { MonsterLocator } from './monsterLocators';

export const MonsterGenerator = {
	generateMonsters: function(num = 1) {
		if (num > 1) {
			let monsterArr = [];
			for (let i = 0; i < num; i++) {
				monsterArr.push(MonsterLocator.findRandomMonster());
			}
			return monsterArr;
		} else {
			return MonsterLocator.findRandomMonster();
		}
	}
};

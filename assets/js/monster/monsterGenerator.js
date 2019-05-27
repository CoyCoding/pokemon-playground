import { MonsterLocator } from './monsterLocators';
import { MoveLocator } from './moveLocator';

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
	},

	generateMoves: function(monsterArr) {
		if (Array.isArray(monster)) {
			monsterArr.forEach(monster => {
				generateMoves(monster);
			});
		} else {
			monster.setMovePool(
				MoveLocator.findRandomMoveSet(4, monster.learnableMoveIds)
			);
		}
	}
};

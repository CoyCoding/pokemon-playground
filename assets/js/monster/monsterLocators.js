import { monsterList } from './data/monsterList';
import { Monster } from './modles/monster';

export function findMonsterById(id) {
	const foundMonster = monsterList.find(monster => {
		return id === monster.id;
	});
	if (foundMonster) {
		return new Monster(
			foundMonster.id,
			foundMonster.name,
			foundMonster.types,
			foundMonster.img,
			foundMonster.learnableMoves,
			foundMonster.movePool
		);
	} else {
		throw new Error('monster not found');
	}
}

export function monsterListLength() {
	return monsterList.length;
}

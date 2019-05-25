import { monsterList } from './data/monsterList';
import { Monster } from './modles/monster';

export function findMonsterById(id) {
	const foundMonster = monsterList.find(monster => {
		return id === monster.id;
	});
	if (foundMonster) {
		return new Monster(foundMonster.id, foundMonster.name, foundMonster.types);
	} else {
		throw new Error('monster not found');
	}
}

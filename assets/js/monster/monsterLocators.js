import { monsterList } from './monsterList';
import { Monster } from './monster';

export function findMonsterById(id) {
	const foundMonster = monsterList.find(monster => {
		return id === monster.id;
	});
	if (foundMonster) {
		console.log(foundMonster);
		return new Monster(foundMonster.id, foundMonster.name);
	} else {
		throw new Error('monster not found');
	}
}

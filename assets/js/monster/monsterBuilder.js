import { Monster } from './modles/monster';

export const MonsterBuilder = {
	buildMonster: function(object) {
		try {
			return new Monster(
				object.id,
				object.name,
				object.types,
				object.img,
				object.learnableMoves,
				object.movePool
			);
		} catch (e) {
			console.log('bad build');
		}
	}
};

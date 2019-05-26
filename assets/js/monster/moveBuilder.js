import { Move } from './modles/move';

export const MoveBuilder = {
	buildMonster: function(object) {
		try {
			return new Move(object.id, object.name, object.type);
		} catch (e) {
			console.log('bad build');
		}
	}
};

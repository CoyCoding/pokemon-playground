import { Move } from '../move';

export const MoveBuilder = {
	buildMove: function(object) {
		try {
			return new Move(object.id, object.name, object.type);
		} catch (e) {
			console.log('bad move build');
		}
	}
};

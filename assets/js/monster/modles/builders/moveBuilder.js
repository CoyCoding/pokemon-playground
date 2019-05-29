import { Move } from '../move';

export const MoveBuilder = {
	buildMove: function(object) {
		try {
			return new Move(object.name, object.type.name);
		} catch (e) {
			console.log('bad move build');
		}
	}
};

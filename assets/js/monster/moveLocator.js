import { moveList } from './data/moveList';
import { Move } from './modles/move';
import { MoveBuilder } from './moveBuilder';
export const MoveLocator = {
	findMoveById: function(id) {
		const foundMove = moveList.find(move => {
			return id === move.id;
		});
		if (foundMove) {
			return MoveBuilder.buildMove(foundMove);
		} else {
			throw new Error('move not found');
		}
	}
};

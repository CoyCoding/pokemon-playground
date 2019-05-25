import { moveList } from './data/moveList';
import { Move } from './modles/move';

export function findMoveById(id) {
	const foundMove = moveList.find(move => {
		return id === move.id;
	});
	if (foundMove) {
		return new Move(foundMove.id, foundMove.name, foundMove.type);
	} else {
		throw new Error('move not found');
	}
}

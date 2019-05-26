import { moveList } from './data/moveList';
import { Move } from './modles/move';
import { MoveBuilder } from './moveBuilder';
import { shuffle } from './utils';

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
	},
	findRandomMoves: function() {
		let index = Math.floor(Math.random() * this.moveListLength());
		return MoveBuilder.buildMove(this.findMoveByIndex(index));
	},

	findRandomMoveSet: function(numOfMoves, moveList) {
		var moveList = shuffle(moveList, numOfMoves).slice(0, numOfMoves);
		for (let i = 0; i < moveList.length; i++) {
			moveList[i] = this.findMoveById(moveList[i]);
		}
		return moveList;
	},

	moveListLength: function() {
		return moveList.length;
	},

	findMoveByIndex: function(index) {
		if (index < this.moveListLength() && index >= 0) {
			return moveList[index];
		} else {
			throw new Error('bad move Index');
		}
	}
};

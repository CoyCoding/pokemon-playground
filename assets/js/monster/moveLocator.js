import { MoveBuilder } from './modles/builders/moveBuilder';
import { shuffle } from './utils';

export class MoveLocator {
	constructor(api) {
		var self = this;
		this.options = {
			protocol: 'https',
			versionPath: '/api/v2/',
			cache: true,
			timeout: 5 * 1000 // 5s
		};
		this.pokemonApi = api;
	}

	findMove(id) {
		return new Promise(resolve => {
			this.pokemonApi.getMoveByName(id).then(response => {
				resolve(MoveBuilder.buildMove(response));
			});
		});
	}
	locateRandomMoveSet(numOfMoves, moveList) {
		return new Promise(resolve => {
			if (moveList <= 4) {
				for (let i = 0; i < moveList.length; i++) {
					moveList[i] = this.findMove(moveList[i].move.name);
				}
				resolve(moveList);
			} else {
				var newList = shuffle(moveList, numOfMoves).slice(0, numOfMoves);
				for (let i = 0; i < newList.length; i++) {
					newList[i] = this.findMove(moveList[i].move.name);
				}
				resolve(newList);
			}
		});
	}

	// findMoveById: function(id) {
	// 	const foundMove = moveList.find(move => {
	// 		return id === move.id;
	// 	});
	// 	if (foundMove) {
	// 		return MoveBuilder.buildMove(foundMove);
	// 	} else {
	// 		throw new Error('move not found');
	// 	}
	// },
	//
	// findRandomMoves: function() {
	// 	let index = Math.floor(Math.random() * this.moveListLength());
	// 	return MoveBuilder.buildMove(this.findMoveByIndex(index));
	// },
	//

	//
	// moveListLength: function() {
	// 	return moveList.length;
	// },
	//
	// findMoveByIndex: function(index) {
	// 	if (index < this.moveListLength() && index >= 0) {
	// 		return moveList[index];
	// 	} else {
	// 		throw new Error('bad move Index');
	// 	}
	// }
}

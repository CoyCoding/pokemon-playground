import { MoveLocator } from './MoveLocator';

export const MonsterModifier = {
	generateRandomMoves: function(monsters) {
		if (Array.isArray(monsters)) {
			monsters.forEach(monster => {
				this.generateRandomMoves(monster);
			});
		} else {
			monsters.setMovePool(
				MoveLocator.findRandomMoveSet(4, monsters.learnableMoveIds)
			);
		}
	}
};

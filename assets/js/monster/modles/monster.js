export class Monster {
	constructor(id, name, types, imgSrc, learnableMoves, movePool) {
		this.id = id;
		this.name = name;
		this.types = types;
		this.img = imgSrc;
		this.learnableMoves = learnableMoves;
		this.movePool = movePool;
		this.MAX_MOVES = 4;
	}
	getMovePool() {
		return this.movePool;
	}

	addToMovePool(move) {
		if (this.movePool.length >= this.MAX_MOVES) {
			throw new Error('Move slots full');
		} else if (this.movePool.some(move => move['id'] === move.id)) {
			throw new Error('you know this move');
		} else {
			this.movePool.push(move);
		}
	}

	setMovePool(movePool) {
		this.movePool = movePool;
	}

	getWeaknesses() {
		let typeArr = [];
		this.types.forEach(type => {
			type.getWeaknesses().forEach(weakness => {
				typeArr.push(weakness);
			});
		});
		return typeArr;
	}

	getStrengths() {
		let typeArr = [];
		this.types.forEach(type => {
			type.getStrengths().forEach(strengths => {
				typeArr.push(strengths);
			});
		});
		console.log(typeArr);
		return typeArr;
	}
}

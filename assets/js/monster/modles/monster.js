import { Type } from './type';

export class Monster {
	constructor(id, name, types, img, learnableMovesIds, movePool) {
		this.id = id;
		this.name = name;
		this.types = createTypeArray(types);
		this.img = img;
		this.learnableMoveIds = learnableMovesIds;
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
		console.log(typeArr);
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

function createTypeArray(type) {
	let i = 0;
	let numOfTypes = type.length;
	let typeArr = new Array();
	for (i; i < numOfTypes; i++) {
		typeArr.push(new Type(type[i].id, type[i].name));
	}
	return typeArr;
}

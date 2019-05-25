import { Type } from './type';

export class Monster {
	constructor(id, name, types, img, learnableMovesIds, movePool) {
		this.id = id;
		this.name = name;
		this.types = createTypeArray(types);
		this.img = img;
		this.learnableMoveIds = learnableMovesIds;
		this.movePool = movePool;
	}
	getMovePool() {
		return this.movePool;
	}

	addToMovePool(move) {
		if (this.movePool.length >= 4) {
			throw new Error('Move slots full');
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

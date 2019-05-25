import { Type } from './type';

export class Monster {
	constructor(id, name, types) {
		this.id = id;
		this.name = name;
		this.types = createTypeArray(types);
	}

	getName() {
		return this.name;
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

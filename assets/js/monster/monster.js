import { Type } from './MonsterType';
import { createTypeArray } from './MonsterType';

export class Monster {
	constructor(id, name, types) {
		this.id = id;
		this.name = name;
		this.types = createTypeArray(types);
		// (this.id = monster.id), (this.name = monster.name);
	}

	getName() {
		return this.name;
	}
	getWeakness() {
		return this.types[0].getWeakness();
		// var typeArr = [];
		// console.log(typeof this.types);
		// for (let type in this.types) {
		// 	console.log(typeof type[0]);
		// 	console.log(type[0]);
		// 	// typeArr.push(type.getWeakness(type.id));
		// }
	}
}

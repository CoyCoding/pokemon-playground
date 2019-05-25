import { Type } from './MonsterType';
import { createTypeArray } from './MonsterType';

export class Monster {
	constructor(id, name, types) {
		this.id = id;
		this.name = name;
		this.types = createTypeArray(types);
	}

	getName() {
		return this.name;
	}

	getWeakness() {
		let typeArr = [];
		this.types.forEach(type => {
			type.getWeakness().forEach(weakness => {
				typeArr.push(weakness);
			});
		});
		console.log(typeArr);
		return typeArr;
	}
}

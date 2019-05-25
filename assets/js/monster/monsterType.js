import { typeList } from './typeList';

export class Type {
	constructor(type) {
		this.type = type;
	}
	getType() {
		return this.type;
	}
	getWeakness() {
		return typeList[0].strengths;
	}
}

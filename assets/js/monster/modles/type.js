import { typeList } from '../data/typeList';

//Type takes id and the type to build a type object
export class Type {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	//returns string value of type
	getName() {
		return this.name;
	}

	// takes the id of the current type and finds its weaknesses
	// retunrs an array of Types
	getWeaknesses() {
		return typeList[this.name].weakness;
	}
	getStrengths() {
		return typeList[this.name].strengths;
	}
}

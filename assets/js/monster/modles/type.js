import { TypeMap } from '../data/typeMap';

//Type takes id and the type to build a type object
export class Type {
	constructor(slot, name) {
		this.slot= slot;
		this.name = name;
	}

	//returns string value of type
	getName() {
		return this.name;
	}

	// takes the id of the current type and finds its weaknesses
	// retunrs an array of Types
	getWeaknesses() {
		return TypeMap[this.name].weakness;
	}
	getStrengths() {
		return TypeMap[this.name].strengths;
	}
}

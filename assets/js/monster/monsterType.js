import { typeList } from './typeList';

//Type takes id and the type to build a type object
export class Type {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	//returns string value of type
	getType() {
		return this.type;
	}

	//takes the id of the current type and finds its weaknesses
	//retunrs an array of Types
	getWeakness() {
		return typeList[this.id].weakness;
	}
}

//stores  as an array of types
export function createTypeArray(type) {
	let i = 0;
	let numOfTypes = type.length;
	let typeArr = new Array();
	for (i; i < numOfTypes; i++) {
		typeArr.push(new Type(type[i].id, type[i].name));
	}
	return typeArr;
}

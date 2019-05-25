import { Type } from './MonsterType';

export class Monster {
	constructor(id, name, types) {
		this.id = id;
		this.name = name;
		this.types = types;
		// (this.id = monster.id), (this.name = monster.name);
	}
	getName() {
		return this.name;
	}
}

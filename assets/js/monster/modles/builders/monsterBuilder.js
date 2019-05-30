import { Monster } from '../monster';
import { TypeBuilder } from './typeBuilder';
import { MoveBuilder } from './moveBuilder';
import { NameResolver } from '../.././nameResolver';

export const MonsterBuilder = {
	buildMonster: function(object) {
		try {
			return new Monster(
				object.id,
				buildName(object.name),
				buildTypes(object.types),
				buildImgSrc(buildName(object.name)),
				object.moves,
				object.movesPool
			);
		} catch (e) {
			console.log('bad monster build');
		}
	},

	generateMonsters: function(num = 1) {
		if (num > 1) {
			let monsterArr = [];
			for (let i = 0; i < num; i++) {
				monsterArr.push(MonsterLocator.findRandomMonster());
			}
			return monsterArr;
		} else {
			return MonsterLocator.findRandomMonster();
		}
	},

	generateMoves: function(monsterArr) {
		if (Array.isArray(monster)) {
			monsterArr.forEach(monster => {
				generateMoves(monster);
			});
		} else {
			monster.setMovePool(
				MoveLocator.findRandomMoveSet(4, monster.learnableMoveIds)
			);
		}
	}
};

function buildName(name) {
	return NameResolver.pokemonName(name);
}

function buildTypes(arr) {
	var typeArray = [];
	arr.forEach(type => {
		typeArray.push(TypeBuilder.buildType(type));
	});
	return typeArray;
}

function buildMovesSet(arr) {
	var moveArray = [];
	arr.forEach(move => {
		moveArray.push(MoveBuilder.buildMove(move));
	});
	return moveArray;
}

function buildImgSrc(name) {
	return NameResolver.pokemonImg(name);
}

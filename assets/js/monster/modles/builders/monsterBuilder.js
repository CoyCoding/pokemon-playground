import { Monster } from '../monster';
import { TypeBuilder } from './typeBuilder';
import { MoveBuilder } from './moveBuilder';

export const MonsterBuilder = {
	buildMonster: function(object) {
		try {
			return new Monster(
				object.id,
				object.name,
				buildTypes(object.types),
				buildImgSrc(object.name),
				object.learnableMoves,
				buildMoves(object.movePool)
			);
		} catch (e) {
			console.log('bad monster build');
		}
	}
};

function buildTypes(arr) {
	var typeArray = [];
	arr.forEach(type => {
		typeArray.push(TypeBuilder.buildType(type));
	});
	return typeArray;
}

function buildMoves(arr) {
	var moveArray = [];
	arr.forEach(move => {
		moveArray.push(MoveBuilder.buildMove(move));
	});
	return moveArray;
}

function buildImgSrc(name) {
	return (
		'https://www.smogon.com/dex/media/sprites/xy/' + name.toLowerCase() + '.gif'
	);
}

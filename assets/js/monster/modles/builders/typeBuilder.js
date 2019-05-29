import { Type } from '../type';

export const TypeBuilder = {
	buildType: function(object) {
		try {
			return new Type(object.slot, object.type.name);
		} catch (e) {
			console.log('bad type build');
		}
	}
};

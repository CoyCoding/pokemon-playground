import { NameMap } from './data/nameCorrectionMap';

export const NameResolver = {
	pokemonName: function(name) {
		if (NameMap[name]) {
			return NameMap[name];
		}
		return name;
	}
};

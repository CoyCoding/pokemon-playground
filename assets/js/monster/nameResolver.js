import { NameMap } from './data/nameCorrectionMap';

export const NameResolver = {
	pokemonName: function(name) {
		if (NameMap[name]) {
			return NameMap[name];
		}
		return name;
	},

	pokemonImg: function(name) {
		let imgName = name.replace(/-/g, '_');
		return (
			'https://www.smogon.com/dex/media/sprites/xy/' +
			imgName.toLocaleLowerCase() +
			'.gif'
		);
	}
};

import { Team } from '../team';

export const TeamBuilder = {
	buildTeam: function(object) {
		try {
			return new Team(object);
		} catch (e) {
			console.log('bad team build');
		}
	}

};

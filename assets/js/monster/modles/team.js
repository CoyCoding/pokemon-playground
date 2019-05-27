

export class Team{
  constructor(monsterArr, MAX_TEAM = 6){
    this.team = monsterArr;
    this.MAX_TEAM = MAX_TEAM;
  }

  getTeam: function(){
    return this.team;
  }
}

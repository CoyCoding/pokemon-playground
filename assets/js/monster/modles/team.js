

export class Team{
  constructor(monsterArr, MAX_TEAM = 6){
    this.team = monsterArr;
    this.MAX_TEAM = MAX_TEAM;
  }

  getTeam: function(){
    return this.team;
  }
  addToTeam: function(monster){
    if(this.team.length >= MAX_TEAM){
      return new Error("Team is Full");
    }else{
      this.team.push(monster);
    }
  }
}

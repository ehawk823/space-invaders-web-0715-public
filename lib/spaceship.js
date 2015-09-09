function Spaceship (name, crew, num_phasers, num_shields) {
  this.name = name;
  this.phasers = num_phasers;
  this.shields = num_shields;
  this.cloaked = false;
  this.crew = crew;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';
  this.docked = crew.length === 0 ? true : false;
  this.notifyCrew();
};

Spaceship.prototype.notifyCrew = function(){
  var that = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = that;
  });
}

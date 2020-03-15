let Harvester = require('role.harvester');

module.exports.loop = function() {
	//console.log('roleharvester', roleHarvester.roleHarvester);
	for (var name in Game.creeps) {
		var creep = Game.creeps[name];
		let harvester = Harvester.createHarvester(creep);
		harvester.run();
		console.log('no error');
	}
};

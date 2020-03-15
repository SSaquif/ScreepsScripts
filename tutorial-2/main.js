let Harvester = require('role.harvester');

module.exports.loop = function() {
	//console.log('roleharvester', roleHarvester.roleHarvester);
	const harvesterArray = [];
	for (var name in Game.creeps) {
		var creep = Game.creeps[name];
		let harvester = Harvester.createHarvester(creep);
		harvesterArray.push(harvester);
		harvester.run();
		console.log('no error');
	}
};

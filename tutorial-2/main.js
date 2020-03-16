let Harvester = require('role.harvester');

module.exports.loop = function() {
	//console.log('roleharvester', roleHarvester.roleHarvester);
	const harvesterArray = [];

	console.log('Type of Game.creeps', typeof Game.creeps);

	//The key is basically the name you gave to the creep
	//for(let key in object)
	for (let creepName in Game.creeps) {
		let creep = Game.creeps[creepName];

		let harvester = Harvester.createHarvester(creep);
		harvesterArray.push(harvester);
		harvester.run();
		console.log('no error');
	}
};

module.exports.loop = function() {
	let creep = Game.creeps.Hrv2;
	console.log('creep', creep);
	console.log('No of harvester creep', Game);

	if (creep.memory.working === false) {
		console.log(`${creep} is not working`);
		let source = creep.pos.findClosestByPath(FIND_SOURCES);
		console.log('Cloest source is::', source);
		if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
			creep.moveTo(source);
		}
		creep.harvest(source);
	}
};

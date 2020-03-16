module.exports.loop = function() {
	let spawn1 = Game.spawns['Spawn1'];
	spawn1.memory.status = 'GOOD';
	console.log('Spawn1', spawn1, typeof Spawn);
};

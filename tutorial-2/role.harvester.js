//Not using anymore, changed to a factory function
var roleHarvester = {
	/** @param {Creep} creep **/
	run: (creep) => {
		if (creep.store.getFreeCapacity() > 0) {
			var sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0]);
			}
		} else if (
			Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity
		) {
			if (
				creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) ==
				ERR_NOT_IN_RANGE
			) {
				creep.moveTo(Game.spawns['Spawn1']);
			}
		}
	}
};

//make it into a factory function or maybe switch to class later class later
function createHarvester(creep) {
	return {
		run: () => {
			if (creep.store.getFreeCapacity() > 0) {
				var sources = creep.room.find(FIND_SOURCES);
				if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0]);
				}
			} else if (
				Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity
			) {
				if (
					creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) ==
					ERR_NOT_IN_RANGE
				) {
					creep.moveTo(Game.spawns['Spawn1']);
				}
			}
		}
	};
}
module.exports = { roleHarvester, createHarvester };

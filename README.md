# Screeps Scripts

### By Sadnan Saquif

### Notes

This are mostly for me as I learn the game

Maybe I will write a tutorial in the future, if I keep playing this game. Don't hold your breathe or do, maybe it's safer given our predicaments :mask: :mask: Happy work from home ppl!!! :smiley:

#### Spawns

Your base, put simply. I believe max 3 per map

#### Creeps

Game.creeps is an object that stores all the creep objects.

```javascript
{
'Harvester1':{},
'GoldenGod':{}
'Denis':{}
}
```

##### Memory and Creep functions

Every creep has a memory object that can be given properties.

```javascript
let creep = Game.creeps['Denis'];
creep.memory.working = true;
```

We can also call functions on our creep Objects to do something with the creep

```javascript
//Find energy sources (probably more ways to do this)
let source = creep.pos.findClosestByPath(FIND_SOURCES);
//move somewhere (to a spawn/source)
creep.moveTo(source);
creep.moveTo(Game.spawns.Spawn1);
//Harvest energy from a source
creep.harvest(source);
//transfer energy to a spawn
creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY);
```

##### Other Useful Properties of creep

```javascript
creep.pos; //current position probably
creep.carry.energy; //current amount of energy harvested by creep !!Not sure
creep.carryCapacity; //Max energy carrying capacity, !! Not sure
```

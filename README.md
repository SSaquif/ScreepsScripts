# Screeps Scripts @ssaquif

## Intro

> **Note To Self::** Should use **_Factory Pattern_**, good way to practice **_Factory Functions_** instead. Currently using classes, keep both for comparison.

> **Reading::** [Composable Factory Functions](https://itnext.io/node-js-composable-factory-functions-over-classes-e07bdd47438f)

These notes are mostly for me as I learn the game. Mistakes might have been made.

Maybe I will write a proper tutorial in the future, if I keep playing this game. Don't hold your breathe or do, maybe it's safer given our predicaments :mask: :mask: Happy work from home stranger if you stumbled upon this on March 2020!!! :smiley:

## Memory

Each **Spawn**, **Creep**, **Room** and **Flag** object has a special property called **memory**, which is initially empty && can be seen on the game screen. The Memory object is kinda like the global state of each of those objects. Holds the present states, and you populate this property as needed to keep track of the states of those aforementioned units (similar to libraries like React that makes use of this state pattern). You will see their usage here & in upcoming sections.

```javascript
//Initially
Memory{
    creeps:{},
    spawns:{},
    rooms:{},
    flags:{}
};

//Some time Later
Memory{
    creeps:{
		Denis:{
			working=true
		}
	},
    spawns:{
		Spawn1:{
			status:'good'
		}
	},
    rooms:{},
    flags:{}
}
```

```javascript
//usage
//add a memory property to a spawn (see spawn below)
spawn1.memory.status = 'GOOD';
```

This is kind of like using **this.state.status** or **useState('Good')**. So now it would be following (memory equivalent to state):

```javascript
//CC
this.memory.status = 'Good';
//OR for FC with hooks
[status, setStatus] = useMemory('Good');
```

## Spawns

Your base, put simply. **Creates creeps**, I believe max 3 per map.
**Needs energy** to create creeps and do stuff.

> **Game.spawns['name']** is used to target a spawn

```javascript
//target Spawn1 (at it's present tick state)
let spawn1 = Game.spawns['Spawn1'];
//add a memory property to the targeted spawn
spawn1.memory.status = 'GOOD';
```

### Spawn Functions

```javascript
//creating a creep with array of actions (body parts) max 50, followed by name
spawn1.spawnCreep([WORK, CARRY, MOVE], 'Harvester1');
```

## Creeps

### Basics, Movement and Damage

A creep does stuff. _MindBoggling analysis Sadnan_.

> 7 kinds of body parts
> **WORK**, **MOVE**, **CARRY**, **ATTACK**, **RANGED** **ATTACK**, **HEAL**, **CLAIM**, **TOUGH**

> To maintain the maximum movement speed of 1 square per tick, a creep needs to have as many **MOVE** parts as all the other parts of its body combined.

Samples:

- Creep [CARRY, WORK, MOVE] will move 1 square per tick if it does not bear energy, and 1 square per 2 ticks if loaded.
- Creep [TOUGH, ATTACK, ATTACK, MOVE, MOVE, MOVE] will move at maximum speed of 1 square per tick.
- Creep [TOUGH, ATTACK, ATTACK, MOVE, MOVE] will move 1 square per 2 ticks because of rounding up.

> The total amount of hits a creep has depends of the amount of its body parts – 100 hits per each part. The order in which the parts were specified during the spawning of a creep also has a bearing. Under attack, the first parts to take hits are those specified first. Full damage to a part leads to complete disabling of it – the creep can no longer perform this function.

### Actual Code Realted Stuff

> **Game.creeps** is an object that stores all the creep objects.

```javascript
{
	'Harvester1':{}, //Can name them whatever
    'GoldenGod':{},
    'Denis':{}
};
```

### Creep Functions

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

### Some Useful Properties of Creeps

```javascript
//current position probably
creep.pos;
//current amount of energy harvested by creep !!Not sure
creep.carry.energy;
//Max energy carrying capacity, !! Not sure
creep.carryCapacity;
```

## Energy

Creeps collect energy
Energy sources can get depleted
Gets restored after 300 ticks

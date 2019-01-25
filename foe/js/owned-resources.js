var ownedResources = [];

// Bronze Age
ownedResources.push({ name: "marble", amount: 17 });
ownedResources.push({ name: "lumber", amount: 17 });
ownedResources.push({ name: "dye", amount: 5 });
ownedResources.push({ name: "stone", amount: 20 });
ownedResources.push({ name: "wine", amount: 18 });

// Iron Age
ownedResources.push({ name: "cloth", amount: 30 });
ownedResources.push({ name: "ebony", amount: 12 });
ownedResources.push({ name: "jewelry", amount: 10 });
ownedResources.push({ name: "iron", amount: 13 });
ownedResources.push({ name: "limestone", amount: 39 });

// Early Middle Ages
ownedResources.push({ name: "copper", amount: 11 });
ownedResources.push({ name: "gold", amount: 14 });
ownedResources.push({ name: "granite", amount: 2 });
ownedResources.push({ name: "honey", amount: 11 });
ownedResources.push({ name: "alabaster", amount: 28 });

// High Middle Ages
ownedResources.push({ name: "bricks", amount: 5 });
ownedResources.push({ name: "glass", amount: 17 });
ownedResources.push({ name: "dried herbs", amount: 3 });
ownedResources.push({ name: "ropes", amount: 14 });
ownedResources.push({ name: "salt", amount: 3 });

// Late Middle Ages
ownedResources.push({ name: "basalt", amount: 5 });
ownedResources.push({ name: "brass", amount: 0 });
ownedResources.push({ name: "gunpowder", amount: 3 });
ownedResources.push({ name: "silk", amount: 2 });
ownedResources.push({ name: "talc powder", amount: 15 });

// Colonial Age
ownedResources.push({ name: "coffee", amount: 5 });
ownedResources.push({ name: "paper", amount: 10 });
ownedResources.push({ name: "porcelain", amount: 0 });
ownedResources.push({ name: "tar", amount: 0 });
ownedResources.push({ name: "wires", amount: 10 });

// console.table(ownedResources);

function getOwnedResourceAmount(resource)
{
	for (var i = 0; i < ownedResources.length; i++)
	{
		if (resource === ownedResources[i].name)
		{
			return ownedResources[i].amount;
		}
	}
	return 0;
}
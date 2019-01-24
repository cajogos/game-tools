var ownedResources = [];

// Bronze Age
ownedResources.push({ name: "marble", amount: 17 });
ownedResources.push({ name: "lumber", amount: 37 });
ownedResources.push({ name: "dye", amount: 25 });
ownedResources.push({ name: "stone", amount: 20 });
ownedResources.push({ name: "wine", amount: 18 });

// Iron Age
ownedResources.push({ name: "cloth", amount: 40 });
ownedResources.push({ name: "ebony", amount: 12 });
ownedResources.push({ name: "jewelry", amount: 26 });
ownedResources.push({ name: "iron", amount: 40 });
ownedResources.push({ name: "limestone", amount: 39 });

// Early Middle Ages
ownedResources.push({ name: "copper", amount: 1 });
ownedResources.push({ name: "gold", amount: 19 });
ownedResources.push({ name: "granite", amount: 12 });
ownedResources.push({ name: "honey", amount: 51 });
ownedResources.push({ name: "alabaster", amount: 110 });

// High Middle Ages
ownedResources.push({ name: "bricks", amount: 57 });
ownedResources.push({ name: "glass", amount: 88 });
ownedResources.push({ name: "dried herbs", amount: 15 });
ownedResources.push({ name: "ropes", amount: 36 });
ownedResources.push({ name: "salt", amount: 45 });

// Late Middle Ages
ownedResources.push({ name: "basalt", amount: 13 });
ownedResources.push({ name: "brass", amount: 22 });
ownedResources.push({ name: "gunpowder", amount: 22 });
ownedResources.push({ name: "silk", amount: 24 });
ownedResources.push({ name: "talc powder", amount: 1 });

// Colonial Age
ownedResources.push({ name: "coffee", amount: 10 });
ownedResources.push({ name: "paper", amount: 15 });
ownedResources.push({ name: "porcelain", amount: 0 });
ownedResources.push({ name: "tar", amount: 10 });
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
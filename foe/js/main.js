var totalsNeeded = [];
for (var i = 0; i < neededResources.length; i++)
{
	var name = neededResources[i].name;
	var amount = neededResources[i].amount;
	if (typeof totalsNeeded[name] === 'undefined')
	{
		totalsNeeded[name] = {
			needed: 0,
			owned: getOwnedResourceAmount(name)
		};
	}
	totalsNeeded[name].needed += amount;
}

for (var name in totalsNeeded)
{
	if (totalsNeeded.hasOwnProperty(name))
	{
		totalsNeeded[name].required = totalsNeeded[name].needed - totalsNeeded[name].owned;
	}
}

// Calculate available resources to trade
var requiredResources = [];
var available = [];
for (var i = 0; i < ownedResources.length; i++)
{
	var name = ownedResources[i].name;
	var amount = ownedResources[i].amount;
	var needed = 0;

	if (typeof totalsNeeded[name] !== 'undefined')
	{
		amount = totalsNeeded[name].owned - totalsNeeded[name].needed;
		needed = totalsNeeded[name].needed;
		if (totalsNeeded[name].required > 0)
		{
			requiredResources[name] = totalsNeeded[name].required;
		}
	}

	if (amount <= 0)
	{
		continue;
	}

	available[name] = {
		owned: ownedResources[i].amount,
		needed: needed,
		available: amount
	};
}

console.warn('*** REQUIRED ***');
console.table(requiredResources);

console.warn('*** AVAILABLE ***');
console.table(available);


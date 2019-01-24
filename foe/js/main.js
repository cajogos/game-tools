var totalsNeeded = [];
for (var i = 0; i < neededResources.length; i++)
{
	var name = neededResources[i].name;
	var amount = neededResources[i].amount;
	if (typeof totalsNeeded[name] === 'undefined')
	{
		totalsNeeded[name] = {
			amount: 0,
			owned: getOwnedResourceAmount(name)
		};
	}
	totalsNeeded[name].amount += amount;
}

for (var name in totalsNeeded)
{
	if (totalsNeeded.hasOwnProperty(name))
	{
		totalsNeeded[name].required = totalsNeeded[name].amount - totalsNeeded[name].owned;
	}
}

console.table(totalsNeeded);
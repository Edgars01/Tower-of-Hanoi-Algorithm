
console.log('ABC');

function towerOfHanoi(numberOfDisks, fromLocation, usedLocation, toLocation)
{
    if (typeof fromLocation != 'string' || typeof toLocation != 'string' || typeof usedLocation != 'string')
    {
        throw new Error("Something went badly wrong!");
    }

    fromLocation = fromLocation.toUpperCase();
    toLocation = toLocation.toUpperCase();
    usedLocation = usedLocation.toUpperCase();

    if (numberOfDisks === 1)
    {
        console.log('move ring 1 from ' + fromLocation + ' to ' + toLocation);
        return;
    }

    towerOfHanoi(numberOfDisks - 1, fromLocation, toLocation, usedLocation);
    console.log('move ring ' + numberOfDisks + ' from ' + fromLocation + ' to ' + toLocation);
    towerOfHanoi(numberOfDisks - 1, usedLocation, fromLocation, toLocation);
}

towerOfHanoi(3, 'a', 'b', 'c');
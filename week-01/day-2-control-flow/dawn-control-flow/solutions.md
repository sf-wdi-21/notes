#Solutions

### Login
Good:
``` javascript
if (password & username) {
    console.log("All good")
} else if ( username === "" ) {
    console.log("Missing Username")
} else if ( password.length === 0 ) {
    console.log("Missing Password")
}
```

Best:
``` javascript
if (password & username) {
    console.log("All good")
} else if ( !username ) {
    console.log("Missing Username")
} else {
    console.log("Missing Password")
}
```

### Superman?
``` javascript
if (isBirdlike && !hasFeathers || isPlanelike && !isMadeOfMetal) {
    console.log("It's Superman!");
}
```



### Alert the Guards!
Good:
``` javascript
if (badThingHappening) {
    alert("Guards!");
}
```

Good:
``` javascript
badThingHappening && alert("Guards!");
```


#### Four Letter Word
Good:
``` javascript
var word = "okay";
var output = "You said: "
if ( word.length === 4) {
    output = output + "****";
} else {
    output = output + word;
}

console.log( output === "You said: ****" ); // simple test
```

Better:
``` javascript
var word = "okay";
var output = "You said: " + ( word.length === 4 ? "****" : word );
console.log( output === "You said: ****" ); // simple test
```



#### Make it a SloppyBurger.
Okay:
``` javascript
var whatISaid = ""; // or "DoubleBurger", or "Burger", etc.
var order = "One Sloppy";
if (whatISaid) {
    order = order + whatISaid;
} else {
    order = order + "Burger"
}
console.log(order);
```

Better:
``` javascript
var whatISaid = ""; // or "DoubleBurger", or "Burger", etc.
console.log( "One Sloppy" + whatISaid || "Burger" );
```


#### Open Sesame
``` javascript
var answer = prompt("What's the password");
if (answer.toLowerCase() === "open sesame") {
    console.log("You May Enter");
} else {
    console.log("You Shall Not Pass");
}
```


#### Indivisible
Okay:
``` javascript
var dividend = 10;
var divisor = 0; // uh oh
var quotient; 
if (divisor === 0){
    quotient = dividend;
} else {
    quotient = dividend / divisor;
}

console.log( quotient === dividend ) // simple test
```

Better:
``` javascript
var dividend = 10;
var divisor = 0; // uh oh
var quotient = (divisor ? dividend/divisor : dividend);

console.log( quotient === dividend ) // simple test
```



#### For Here?
``` javascript

var isHotBeverage = false;
var isHotBakedGood = false;
var isColdPreparedFood = false;
var forHere = true;

var total = 100;

if ( forHere || !isHotBeverage || !isHotBakedGood || !isColdPreparedFood) {
    total = total + (total*0.0775)
}
console.log( total )
```



#### Get to Work
Good
``` javascript
var temperature = 80;
var isRaining = false;
var canCatchRide = false;

if (!isRaining && temperature > 50 || temperature < 90) {
    // bike
    console.log("ETA: 8:25-8:30");
} else if ( canCatchRide ) {
    // car
    console.log("ETA: 8:30-8:45");
} else {
    // bart
    console.log("ETA: 8:20-8:40");
}

```



#### Can I ride?
    
``` javascript
var bossIsLooking = false;
var height = 48;
var tokens = 10;
var age = 11;
var accompanied = true;

if (!bossIsLooking) {
    console.log("Step Right Up!")
} else if (tokens > 5) {
    if (height >= 48) {
        if (age >= 12 || accompanied) {
            console.log("Step Right Up!")
            tokens = tokens - 5;
        } else {
            console.log("Sorry, too young!")
        }
    } else {
        console.log("Sorry, too short!")
    }
} else {
    console.log("Sorry, not enough tokens.")
}
```



### Bottles Of Beer

Good:
``` javascript
    
    for(var b=5; b>=0; b--){
        console.log(b + " bottles of beer on the wall,")
        console.log(b + " bottles of beer!")
        console.log("Take one down, pass it around")
        console.log(b-1 + " bottles of beer on the wall")
    }

```

Better:
``` javascript
    
    var bottles = 5;

    while(bottles--){
        console.log(bottles + " bottles of beer on the wall,")
        console.log(bottles + " bottles of beer!")
        console.log("Take one down, pass it around")
        if (bottles){
            console.log(bottles-1 + " bottles of beer on the wall")
        } else {
            console.log("No more bottles of beer on the wall!")
        }
    }

```

This works too...
``` javascript
    var bottles = "bottles"
    while (numBottles > 0){
        console.log(numBottles + " " + bottles + " of beer on the wall,");
        console.log(numBottles + " " +  bottles + " of beer");
        console.log("Take one down and pass it around,");
        numBottles = numBottles - 1;
        if (numBottles === 1){
            bottles = "bottle"
        }
        if (numBottles === 0){
            console.log("No more bottles of beer on the wall!");
        } else {
            console.log(numBottles + " " + bottles + " of beer on the wall!");
        }
    }
```



#### Shush
```javascript
    var answer = prompt("Welcome to the library");
    while( answer ) {
        answer = prompt("Shhh");
    }
```

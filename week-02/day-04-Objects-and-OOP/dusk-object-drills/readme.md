#Flowers as Objects (contd.)

We have a fully functioning Flower object that we can use to create flowers.

```javascript
function Flower(){
    this.color = "red";
    this.petals = 32;
    this.smellsPretty= true;
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
    	if (answer) {
    		return 'This flower smells amazing!';
    	} else {
    		return 'What a noxious weed!';
    	}
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");    
	}
}
```

While this object might be pretty and smell nice, the core functionality is a bit lacking.
Objects have the benefit of being able to interact with other objects.  We can do this by
passing into object methods entire *other* objects or *other* object properties.

```javascript
/// Demonstrates object to object interaction
  this.compare =  function(otherFlower) {
      return("My " + this.color + " flower is much prettier than your " + 
        otherFlower.color + " flower :P");
  };
```

Notice the parameter used with the `compare` method.  `other-` is used to denote 
the parameter as a similar but foreign object.  This convention helps with knowing
which object is which.    

<br>
<h2> Custom Objects </h2>
We can use parameters with our object constructor!  

```javascript

function Flower(color, petals, smellsPretty){
    this.color = color;
    this.petals = petals;
    this.smellsPretty= smellsPretty;
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
    	if (answer) {
    		return 'This flower smells amazing!';
    	} else {
    		return 'What a noxious weed!';
    	}
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
	  }
    /// Demonstrates object to object interaction
    this.compare =  function(otherFlower) {
        return("My " + this.color + " flower is much prettier than your " +
          otherFlower.color + " flower :P");
    };
    this.render = function() {
        $('body').append("<p>My pretty flower is " + this.color +
          " and has " + this.petals + " pristine petals.</p>");
    }
}
``` 

Now the three properties (color, petals, and smellsPretty) will reflect the values
of whatever arguments were passed in when the object was created.


```javascript

var chrysanthenum = new Flower("pink", 65, false);
var rose = new Flower("red", 32, true);
var lily = new Flower("yellow", 6, true);
```

These objects still have all of the methods and abilities of the previous objects we
made.  The main difference is that they can be customized with specific properties
at the time of object instantiation.

<h3>Group Challenge</h3>
Create a custom Flower object based on the flower on your table.  Decided amongst your
tablemates the type of flower, the flower's main color, number of petals, and whether or not it smells pretty.
Think up some other possible properties.  We need more properties!  Properties are great!  


Now we should have at least six individual and unique Flower objects we can use.
Lets find the best new properties and integrate them into our class-wide Flower object.

###Cross-Pollination Challenge

Now that we are awesome Flower experts, lets try our hand at cross-pollinating two flower objects to create an
entirely **NEW** Flower object!  

- Create a method called crossPollinate
- The method will have another Flower object as a parameter.  
- Return a new Flower. Make the Flower's color a mix of both 'parent' colors. (i.e. red, yellow = "red-yellow") We don't care about the color wheel. 
- Make the new petal count an average between the two parents' petal counts.
- The smellPretty gene is recessive unfortunately. This means that a flower will smell pretty IF and only IF both flowers smell pretty.  

*Thought experiment: Could we create an intermediary object, maybe called Bee, that could facilitate cross-pollination and return a new flower? Flowers don't just bash their heads together and make new flowers in the real world!  They need bees!  What are some methods we could assign to a Bee object?*

<h3>Uber Challenge</h3>
-  Create a method within the Flower object that will render a description of your flower along with all of its vital statistics we have collected as well as an image to a simple website.  
-  Name your webpage "The San Francisco First Annual General Assembly Parade of Flowers."  
-  If we are consistent botanists all of our objects will have the same methods and properties.  
-  Share your team's flower object on slack and we will all be able to include all 7 flowers in our Parade of Flowers website!

###Object-in-Object Challenge
- Create a vase object which simply contains an array of flower objects.
- Crate a method placeFlower() that accepts a flower object as a parameter and inserts the object into the array
- Create a wilt() method that decrements each flower by one petal. :(
- Create a water() method that increments each flower by one petal. :)  


**Stretch Goal**
Like everything that contains repeated data, this site could definitely benefit from some Underscore!  


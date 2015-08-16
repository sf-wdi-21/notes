#Array Methods#
We can traverse an array of elements with a simple for-loop, but this *really* isn't the best approach to accessing and changing a list in Javascript.

As per usual, Javascript has provided us with quite a few powerful built-in methods that make accessing elements in an array a relative breeze.

*We will no longer be using the traditional for-loop structure to access and work with the elements within an array.  Adios!*

##Array Method Basics##

```javascript
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry", 
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];
```

Accessing the **first** element of an array:  

```javascript
var first = fruits[0];
// "Apple"
```

Accessing the **length** of an array:

```javascript
var arrLen = fruits.length;
// 10
```
Accessing the **last** element of an array:  

```javascript
var last = fruits[fruits.length-1];
// "Jackfruit
```
**Adding** an element to the **front** of an array:

```javascript
fruits.unshift("Apricot") // add to the front
// 11
```

**Adding** an element to the **end** of an array:  

```javascript
fruits.push("Kiwi");
// 11
``` 

**Removing** an element from the **front** of an array:

```javascript
fruits.shift(); // remove Apricot from the front
// "Apricot"
```

**Removing** an element to the **end** of an array:  

```javascript
var last = fruits.pop(); // remove Kiwi (from the end)
// "Kiwi"	
``` 
**Finding** the index of an element in an array:  

```javascript
var jackFruitPos = fruits.indexOf("Jackfruit");
// 9  (Jackfruit can be accessed at fruits[9])
```

**Removing** an element in an array by index position:  
  
```javascript
var huckleBerryPos = fruits.indexOf("HuckleBerry");
var removedItem = fruits.splice(huckleBerryPos, 1); 
// ["Apple", "Banana", "Cherry", "Durian", "Elderberry", "Fig", "Guava", "Ice plant", "Jackfruit"];
```

![img](http://www.frusion.com/media/1011/fruit-row.png)


#Traversals and Actions#

##array.forEach()##

To loop through an array in a fashion similar to a for-loop traversal with the ability to alter each element, a `forEach()` method is available

**forEach function skeleton**:

```javascript

array.forEach( function callBack (element, index, array) {
    console.log(index + ". " + element); 
});
```

Fruity Example - Make a numbered list

```javascript
fruits.forEach( function (element, index, array) {
  console.log(index + ". " + element);
});
/*	0. Apple 
	1. Banana 
	2. Cherry 
	3. Durian 
	4. Elderberry
	5. Fig
	6. Guava
	7. Huckleberry
	8. Ice plant
	9. Jackfruit
*/
```
     
##array.map()##
Similar to `forEach()`, `map()` traverses an array; this method, however, performs whatever callback function you pass into it as an argument on each element. 


Fruity Example - pluralize all of our fruits  

```javascript
fruits = fruits.map(function(element) {
	
	// if word ends in 'y', remove 'y' and add 'ies' to the end
  	var lastLetter = element[element.length -1];
   	if( lastLetter === 'y'){ 
  		element = element.slice(0,element.length-1) + 'ie';
	}
   	element = element+'s';
 
  	return element;
});
// "Apples", "Bananas", "Cherries", "Durians", "Elderberries", "Figs", "Guavas",  
// "Huckleberries", "Ice plants", "Jackfruits"

```

Numbers Example - Square each number in an array

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers.map( function( element ) {
	element = Math.pow(element, 2);

	return element;
});
// numbers = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

##array.reduce()##
The `reduce()` method is designed to create one single object that is the result of an action performed among all elements in an array.  It essentially 'reduces' the values of an array into one single element.

Fruity Example - Return the first letter of every word in fruits concatentated into one single string:  

```javascript 
avgLen = fruits.reduce( function(current, next, index){
    if(index == 1) { 
    	current = current[0]; 
    }
	return current+next[0];
});
// "ABCDEFGHIJ"

```
Numbers Example - Find the sum of all of the numbers in an array:

```javascript 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = numbers.reduce( function(current, next){
	return current + next; 
});
// sum => 55

```

##array.filter()##
With the `filter()` method you can create a *second* array filled with elements that pass certain criteria that you desginate.  This is great for creating a sub array of fruits that start with vowels, a list of even numbers from a bigger list, and so on.  
  *It's important to remember that a filter method on an array needs a `boolean` return value for the callback function you pass as an argument.*  
  
Fruity Example - Return a list of fruit that start with vowels:  

```javascript 
var vowels = ["A", "E", "I", "O", "U"];
function vowelFruit(fruit) {
  var isVowel = vowels.indexOf(fruit[0]);
  if (isVowel >= 0) {
  	return true; 
  } else { 
  	return false;
  }
}
var vowelFruits = fruits.filter(vowelFruit);
// ["Apple", "Elderberry", "Ice plant"]

```
Numbers Example - Find all even numbers within an array greater than 5:  

```javascript 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

even = numbers.filter( function(num){
	var isEven = num%2==0;
    var greaterThanFive = num > 5;
    return isEven && greaterThanFive;
});
// [6, 8, 10]

```


[Here is a link to the Mozilla Developer Network page on Javascript Arrays and prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
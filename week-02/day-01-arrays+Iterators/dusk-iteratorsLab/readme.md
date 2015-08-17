#Iterators from Scratch

|Learning Objectives|
| :--- |
| Implement iterators from scratch |
| Write assertions to test our code |
| Organize our functions into a utility object |

##Existing Iterators

JavaScript's `Array` comes with many built in iterators that help make our life easier as using `for` loops are clunky and unintuitive. Let's take moment to see what methods are native to an array... We can list all methods with: `Object.getOwnPropertyNames(Array.prototype)`.

That great, but why isn't there functions like `.first`, `.last`, `.min`, or `.max`? Let's implement these functions to make our lives easier down the road.

##Assertions

A function's behavior is defined by the output it provides when passed an input. Using **assertions** we can test that a function is behaving correctly when passed a specific input. Therefore,  for that use case. Make sure to have multiple assertions to eliminate edge cases.

Example:

```javascript
function mphToKph(mph) {
  return Math.round(mph * 1.61);
}

assert(60, 0, mphToKph) //false

assert(60, 97, mphToKph) //true
```

###Setup

* Create a file in this directly called `utilityFunctions.js`
* Copy this code into that file :

```javascript
function assert(input, output, testFunction) {
	return output === testFunction(input);
}
```

We can use this function to test the code we are about to write. If the `assert` function returns `true`, we can be confident our function works as expected for a particular use-case.

###Challenge!

Now use the below tests to infer the behavior of the functions `first`, `last`, `min`, and `max`.

* First `console.log` each assertion result, with a description of what's happening, making sure it fails
* Next write the code to make the assertion pass (making it return true)
* Finally move on to the next assertion and repeat

*Note: It's always a good idea to write several tests. Add more if you'd like.*

**First**

```javascript
assert(["monday", "tuesday", "wednesday"], "monday", first)
assert(["thursday", "friday", "saturday"], "thursday", first)
```

**Last**

```javascript
assert(["monday", "tuesday", "wednesday"], "wednesday", last)
assert(["thursday", "friday", "saturday"], "saturday", last)
```

**Min**

```javascript
assert([144, 12, 81, 9], 9, min)
assert([42, 17, 4, 9, -Infinity, 7], -Infinity, min)
```

**Max**

```javascript
assert([2, 4, 8, 16, 32, 64, 10], 64, max)
assert([99,-1, Infinity, 0, 99], Infinity, max)
```

##Organizing Your Code

###Methods

The functions we've made are great but not organized in any way. Notice JavaScript doesn't have many global functions. For example `forEach` is a method of an `Array` and doesn't live on it's own.

This is a good design principal to avoid cluttering the global namespace and organize your code. Below we can see two **methods**: `greet` and `useTheForce`, and two **attributes** `firstName` and `lastName`.

```javascript
var lukeSkywalker = {
  firstName: "Luke",
  lastName: "Skywalker",
  greet: function() {
    return "Hi I'm " + this.firstName + " " + this.lastName; 
  },
  useTheForce: function(){
    // the force!
  }
}
```
*Note: `this` always refers directly to the object the method belongs to; here it is an alias for `lukeSkywalker`.*

###Challenge!

* Now pack all your existing functions into an object: `o_o`.

##Testing Library

Great! You've passed the assertions to build these useful utility functions. Let's level-up our testing skills by using the below tests, written for us, and a testing library called Jasmine.

###Setup

* from anywhere in your computer run `npm install -g jasmine`
* `cd` into the directory `starterCode`
* run the command `jasmine` to see a bunch of failing tests!
* In the file `iterators.js` write code to pass the tests
* Run `jasmine` again check your work

Tip: Error messages are your friend!


*Note: At the top of your tests a red `F` signals a failing test, while a green `.` signals a passing one.*


###Challenge!

To pass the tests in `iterators.js` write working code for:

* `.each`
* `.map`
* `.filter`


##Underscore

If you have completed the above exercises, you have earned the privilege to use the [Underscore](http://underscorejs.org/) library. It is a collection of utility functions that makes our lives easier as JavaScript developers. Been there done that!

#Modular Programs

##Learning Objectives

* Master conditional statements & control flow
* Pass arguments into your program
* Define well-named variables
* Comment your code to clarify your thought process

##Requirements

* Only use conditional statements; no iterators or functions

##Tips

* Create a new javascript file and run it with node.
* Inspect `process.argv` to see an array of arguments passed into the file.
* By default the first two arguments will be `node` and the path to the file, i.e. `~/dev/someFolder/app.js`.
* Given this it could be useful to remove or "slice" the first two arguments with `process.argv.slice(2)` and keep the remaining values of whatever we pass in.
* Try setting the value of `process.argv.slice(2)` to a variable called `arguments` which you can use inside your program.

##Exercises

###1. Temperature calculator
User should be able to...

* Pass a temperature into the program

* Receive an output based on the temperature provided. Anything between 60 to 80 degrees is a nice day; otherwise, it's too hot or too cold. 

```javascript
node tempCalc.js 78
=> Enjoy the day! Let's have a picnic :)
```

```javascript
node tempCalc.js 105
=> Too darn hot! I'm shvitzing over here.
```

```javascript
node tempCalc.js 48
=> Brrrr... no, get back inside!
```

Hint: You may have to recast your temperature's datatype to be an integer.


###2. The Bridge of Death
Grail-seeker should be able to...

* Give answers the questions:

	1) What is your favorite color?
	
	2) What is the capital of Assyria?
	
	3) What is the airspeed velocity of an unladen swallow?
	
* Answer correctly, as follows:

	1) Blue, red, green, yellow, purple, orange, pink are all acceptable
	
	2) Assur
	
	3) 24mph
	
* Be allowed to pass for a correct answer

	```javascript
	node bridgeOfDeath.js blue Assur 24mph
	=> "You may pass"
	```
* Be cast into the gorge of eternal peril for an incorrect answer
	
	```javascript
	node bridgeOfDeath.js grey Constantinople 10kph
	=> "You have been cast into the gorge of eternal peril!"
	```


###3. Rock Paper Scissors
Player should be able to...

* Choose rock, paper, or scissors
* Win or loose

```javascript
node rps.js rock
=> Computer chose paper, you loose.
```

```javascript
node rps.js paper
=> Computer chose scissors, you win!
```

Hint: Rock beats scissors, scissors beats paper, and paper beats rock

###4. Hello Everybody
Greeter should be able to...

* Pass in a list of names that is an indeterminate size
* Say hello to each person in the list

```javascript
node helloEverybody.js Ilias Justin
=> Hello Ilias
=> Hello Justin
```

```javascript
node helloEverybody.js Nathan
=> Hello Nathan
```

###5. Common Divisor
Mathematician should be able to...

* Pass in two numbers, n1 & n2
* Have n1 represent the an upper limit
* Have n2 represent a divisor
* See the output as all the numbers between 0 and n1 that are perfectly divisible by n2

```javascript
node modulo.js 20 5
=> [5, 10, 15, 20]
```

```javascript
node modulo.js 100 6
=> [ 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96 ]
```



#Modular Programs

##Learning Objectives

* Master conditional statements & control flow
* Pass arguments into your program
* Define well-named variables
* Comment your code to clarify your thought process

##Tips

* Create a new javascript file and run it with node.
* Console `process.argv` to the log and see an array of arguments passed into the file.
* By default the first two arguments will be `node` and the path to the file, i.e. `~/dev/someFolder/app.js`.
* Given this it could be useful to remove or "slice" the first two arguments with `process.argv.slice(2)` and keep the remaining values of whatever we pass in.
* Try setting the value of `process.argv.slice(2)` to a variable called `arguments` which you can use inside your program.

##Exercises

###Control Flow

####1. Temperature calculator
User should be able to:

* Pass a temperature into the program

* Receive an output based on the temperature provided. Anything between 60 to 80 degrees is a nice day; otherwise, it's too hot or too cold. 

```bash
node tempCalc.js 78
=> "Enjoy the day! Let's have a picnic :)"
```

```bash
node tempCalc.js 105
=> "Too darn hot! I'm shvitzing over here."
```

```bash
node tempCalc.js 48
=> "Brrrr... no, get back inside!"
```

Hint: You may have to recast your temperature's datatype to be an integer.


####2. The Bridge of Death
Grail-seeker should be able to:

* Give answers the questions:

	1) What is your favorite color?
	
	2) What is the capital of Assyria?
	
	3) What is the airspeed velocity of an unladen swallow?
	
* Answer correctly, as follows:

	1) Blue, red, green, yellow, purple, orange, pink are all acceptable
	
	2) Assur
	
	3) 24mph
	
* Be allowed to pass for a correct answer

	```bash
	node bridgeOfDeath.js blue Assur 24mph
	=> "You may pass"
	```
* Be cast into the gorge of eternal peril for an incorrect answer
	
	```bash
	node bridgeOfDeath.js grey Constantinople 10kph
	=> "You have been cast into the gorge of eternal peril!"
	```


####3. Rock Paper Scissors
Player should be able to:

* Choose rock, paper, or scissors
* Win or loose

```bash
node rps.js rock
=> "Computer chose paper, you loose."
```

```bash
node rps.js paper
=> "Computer chose scissors, you win!"
```

Hint: Rock beats scissors, scissors beats paper, and paper beats rock

<<<<<<< HEAD
###4. Hello Everybody!
Greeter should be able to...

* Pass in a variable-size list of names
* Have a greeting logged for each name

```
node helloEverybody.js Ilias Nathan Justin
=> Hello Ilias!
=> Hello Nathan!
=> Hello Justin!
``` 

```
node helloEverybody.js Vikash Camilo
=> Hello Vikash!
=> Hello Camilo!
```

###5. Modulo
Calculator should be able to...

* Pass in two numbers: n1 & n2
* See the program console every number in between zero and n1 which is divisible by n2

```
node modulo.js 14 3
=> [3,6,9,12]
```

```
node modulo.js 15 5
=> [5,10,15]
```

```
=======
###Iterators

####4. Hello Everybody
Greeter should be able to:

* Pass in a list of names that is an indeterminate size
* Say hello to each person in the list

```bash
node helloEverybody.js Ilias Justin
=> "Hello Ilias"
=> "Hello Justin"
```

```bash
node helloEverybody.js Nathan
=> "Hello Nathan"
```

####5. Common Divisor
Mathematician should be able to:

* Pass in two numbers, n1 & n2
* Have n1 represent the an upper limit
* Have n2 represent a divisor
* See the output as all the numbers between 0 and n1 that are perfectly divisible by n2

```bash
node modulo.js 20 5
=> [5, 10, 15, 20]
```

```bash
>>>>>>> 70b1fed464a0806542fd9bf272a2c82380d3dc98
node modulo.js 100 6
=> [ 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96 ]
```

<<<<<<< HEAD


=======
####Bonus: Reverse <-> esreveR
*Without using the `Array`'s `reverse` method...*

User should be able to:

* Pass in a one word and have it reversed

```bash
node reverseMe.js yabbadabbadoo!
=> !oodabbadabbay
```

```bash
node reverseMe.js racecar
=> racecar
```
>>>>>>> 70b1fed464a0806542fd9bf272a2c82380d3dc98

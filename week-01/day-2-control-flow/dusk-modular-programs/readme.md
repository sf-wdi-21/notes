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

```
node tempCalc.js 78
=> Enjoy the day! Let's have a picnic :)
```

```
node tempCalc.js 105
=> Too darn hot! I'm shvitzing over here.
```

```
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

	```
	node bridgeOfDeath.js blue Assur 24mph
	=> "You may pass"
	```
* Be cast into the gorge of eternal peril for an incorrect answer
	
	```
	node bridgeOfDeath.js grey Constantinople 10kph
	=> "You have been cast into the gorge of eternal peril!"
	```


###3. Rock Paper Scissors
Player should be able to...

* Choose rock, paper, or scissors
* Win or loose

```
node rps.js rock
=> Computer chose paper, you loose.
```

```
node rps.js paper
=> Computer chose scissors, you win!
```

Hint: Rock beats scissors, scissors beats paper, and paper beats rock

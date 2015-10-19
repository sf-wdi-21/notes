# Angular Hangman App

Your goal is to implement an AngularJS
version of the
<a href="http://en.wikipedia.org/wiki/Hangman_%28game%29" target="_blank">Hangman</a> game.

## Set Up

* This will be a single page app with one view (no routing involved).
* You'll need an `index.html` and an `app.js` to get started. Remember to define your app and controller in `app.js` and include both in your `index.html` (using `ng-app` and `ng-controller`).

## Minimum Requirements

See the <a href="http://en.wikipedia.org/wiki/Hangman_%28game%29" target="_blank">Wikipedia</a>
link for basic gameplay instructions if you are unfamiliar with them.

* A user should be able to enter a word, and then it should be hidden from view.
* Each letter of the word should be represented by an underlined blank space.
* Another use should be able to guess letters.
  * If a letter is guessed correctly, all instances of it should be shown in place of the blank spaces.
  * If a guessed letter is not in the word, a counter should be incremented to show the number of incorrect guesses (there should be a limit on how many incorrect guesses a user can take).
  * A user should not be able to guess the same letter twice.
* The second user wins if she correctly identifies all the letters before reaching the guessing limit.

## Bonus

* To help indicate the number of remaining guesses, draw the hangman (or the representation of your choosing) on an <a href="http://www.html5canvastutorials.com/tutorials/html5-canvas-line-color">HTML5 Canvas element</a>.
* Allow the user to enter hints when they create the word, and let the user playing the game see these hints if they choose.
* Find a dictionary API and use it to determine if the word entered at the start of the game is valid.

#Week 1 Project - Racing Game

**Objective:** Build a simple two player racing game.

This week we have been learning about writing functions, working with loops, and writing conditionals. We also explored class-based CSS rules and got our first taste of jQuery.

This weekend, we will be making a racing game using all of this!

## Minimum Requirements
A player should be able to...
* see a beautiful gameboard (with a lane for each player)
* race against another player
* press a key on the keyboard and see their piece move by one space
  * e.g. the "a" key moves player 1, the "l" key moves player 2
* reach the end of the track and "win" the round
* see who won the current round
* reset the game state by clicking a reset button

**Hints**:  
* To move players use a combination of a class-based css rule (e.g. `.active`) and jQuery to toggle the class.
* Start by getting just one player & track working before you add a second.

**Best Practices**:  
* Start small and build incrementally. What's the easiest thing you can solve first?
* Stick with the KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles
* Use Seperation of Concerns: keep your html, css and javascript in seperate files. 
* Take care to name your variables clearly
* Comment complex sections of your code
* Prefer a well named function or variable name, to a comment.
* Create a public Github repository for this project with frequent commits and helpful commit messages! (REQUIRED)
* Have useful documentation (a readme) that you or other developers can reference later. (REQUIRED)


##How to get started
1. Construct a `index.html` file to be your starting point on this project. Add your necessary html tags, including `script` and `link` tags to link to your javascript and css respecively.
2. Before you even start working with javascript, construct the gameboard/track. Use ids and classes on elements so you can style them more easily and select them with jQuery.
3. As a sanity check: you should be able to manually move your player by using only the `.active` class and by modifying your html (no javascript).
4. Next, you can start working with javascript in your Chrome Developer Console:
  * Identify the css selector for the starting position
  * Try to grab the matching element using jQuery.
  * Try to toggle its state
  * Try to identify/select the next cell, and repeat the process.
  * (You may need a variable to keep track of each player's position!)

##Stretch Goals
A player can...
* see the winning time displayed on the board
* customize their player:
  * type in their player name
    * see their name next to their track.
    * see their name when they win ("John wins!").
  * pick a color or avatar
    * see their color or avatar on the board
  * see a setup page where they can assign player names and colors before seeing the gameboard.
* alternate between keys:
  * e.g. instead of typing "j-j-j-j", they have to alternate between two keys: "j-k-j-k-j-k" (in the correct order!).
* race against a bot

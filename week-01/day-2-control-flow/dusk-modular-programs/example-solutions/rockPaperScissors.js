//placeholder
var result;
// default player win state
var playerWon = false;
var tie = false;
//grab arguments
var args = process.argv.slice(2);
// grab player move from arugments
var playerMove = args[0];

//randomly choose rock, paper, or scissors
var random = Math.round(Math.random() * 2);
var computerMove = ["rock", "paper", "scissors"][random];

//rock beats scissors
if (playerMove === "rock" && computerMove === "scissors") {
  playerWon = true;
}

//paper beats rock
if (playerMove ===  "paper" && computerMove === "rock") {
  playerWon = true;
}

//scissors beats paper
if (playerMove === "scissors" && computerMove === "paper") {
  playerWon = true;
}

//tie?
if (playerMove === computerMove) {
  tie = true;
}

//output the result to the console
if (tie) {
  result = "Tie game!";
} else if (playerWon) {
  result = "You win! " + playerMove + " beats " + computerMove + "!";
} else {
  result = "You loose, " + computerMove + " beats " + playerMove + "!";
}

console.log(result);




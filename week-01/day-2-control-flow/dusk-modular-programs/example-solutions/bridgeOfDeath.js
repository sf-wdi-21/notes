//default placeholders
var result;
var answer1Correct = true;
var answer2Correct = true;
var answer3Correct = true;
//acceptable answers
var colors = [
              "red",
              "blue",
              "yellow",
              "green",
              "purple",
              "orange",
              "pink"
            ];
var assyriaCapital = "Assur";
var swallowVelocity = "24mph";
//grab arugments
var args = process.argv.slice(2);
//initialize variables for each
//of the arguments
var favColor = args[0];
var assyriaCapitalGuess = args[1];
var swallowVelocityGuess = args[2];
//if favorite color is not in the color array
if (colors.indexOf(favColor) === -1){
  answer1Correct = false;
}
//if assyria capital guess is not correct
if (assyriaCapitalGuess != assyriaCapital){
  answer2Correct = false;
}
//if the airspeed velocity of a swallow is incorrect
if (swallowVelocityGuess != swallowVelocity){
  answer3Correct = false;
}
//if any of the guesses are incorrect
//the use is cast into the gorge of
//eternal peril
if (answer1Correct &&
    answer2Correct &&
    answer3Correct) {
  result = "you may pass."
} else {
  result = "you have been cast into the gorge of eternal peril!";
}
//output the result to the console
console.log(result);
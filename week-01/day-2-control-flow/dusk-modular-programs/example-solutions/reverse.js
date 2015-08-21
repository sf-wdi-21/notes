//grab the word passed in
var word = process.argv[2];
//split the word into an array containing each letter as an item
var wordArray = word.split("");
//paceholder for reversed word
var reversedWordArray = [];
//iterate through the array backwards
for (var i = wordArray.length - 1; i >= 0; i--) {
  //push each item into a new array
  reversedWordArray.push(wordArray[i]);
}
//join the reversed word array
var reversedWord = reversedWordArray.join("");
//log the reversed word to the console
console.log(reversedWord);
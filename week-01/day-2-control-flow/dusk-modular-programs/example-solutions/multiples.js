//grab numbers from the arguments
var numbers = process.argv.slice(2);
//grab to upper limit we are calculating to from the numbers & convert to an Int
var limit = parseInt(numbers[0]);
//grab the number we want a zero remainder of & convert to an Int
var divisor = parseInt(numbers[1]);
//temporary storage divisiable numbers
var divisableNumbers = [];
//iterate through every number from 0 to the limit
//0 & 1 can be excluded from modulos, so start from 2
for (var i = 2; i < limit; i ++) {
  if (i % divisor === 0) {
    divisableNumbers.push(i);
  }
}

//return the list of divisable numbers
console.log(divisableNumbers);

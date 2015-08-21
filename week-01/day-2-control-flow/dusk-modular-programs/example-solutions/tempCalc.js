//placeholder for now
var result;
//filter out the first to items in
//argv to only get the arguments
//passed in to the program
var args = process.argv.slice(2);
//grab the first item from the
//arguments passed in
var temp = args[0];
//convert the temp to a integer
temp = parseInt(temp);
//conditional logic
if (temp < 60 ) {
  result = "Brrrr... no, get back inside!"
} else if (temp > 80) {
  result = "Too darn hot! I'm shvitzing over here."
} else {
  result = "Enjoy the day! Let's have a picnic :)"
}
//output value of result
console.log(result);


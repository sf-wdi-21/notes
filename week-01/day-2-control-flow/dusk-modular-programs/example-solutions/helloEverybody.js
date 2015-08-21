//grab the names
var names = process.argv.slice(2);

//iterate through the names and log a greeting for each one
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i] + "!");
} 
/* forEach example */
myArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// This is how you print out numbers: 

/* old forloop version */
for(var i = 0; i < myArr.length; i++) {
	console.log(myArr[i]);
}

/* forEach version */
myArr.forEach(function(element) {
	console.log(element);
});


//------------------------------------------------------
//------------------------------------------------------


/* map example */
// This is how you change an array :

/* old forloop version */
for(var i = 0; i < myArr.length; i++) {
	myArr[i]=myArr[i]*2;
}
console.log(myArr);

/* resetting array back to normal */
myArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

/* map version */
myArr = myArr.map(function(element) {
	return element * 2;
});
console.log(myArr);


//------------------------------------------------------
//------------------------------------------------------


/* filter example */

/* resetting array back to normal */
myArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var filteredArr = [];

/* we will capture only integers greater than 10 */
for(var i = 0; i < myArr.length; i++) {
	if(myArr[i] > 10){
		filteredArr.push(myArr[i])
	}
}
console.log(filteredArr);

/* resetting array back to normal */
filteredArr = [];

/* filter version */
filteredArr = myArr.filter(function(element) {
	if (element > 10) {
		return element;
	}
});
console.log(filteredArr);


//------------------------------------------------------
//------------------------------------------------------


/* reduce example */

/* resetting array back to normal */
myArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];


var sum = 0;
/* we will add all of the numbers in the array together */
for(var i = 0; i < myArr.length; i++) {
	sum += myArr[i];
}
console.log(sum);


/* reduce version */
var reduceSum = myArr.reduce(function(previous, next) {
	return previous + next;
});

console.log(reduceSum);

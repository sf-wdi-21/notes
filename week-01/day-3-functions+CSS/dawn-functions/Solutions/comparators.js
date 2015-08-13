/* 
Create a function that compares two integers, a and b, and returns a numerical value indicating if a is greater, less than, or equal to b. This function will be used as a helper function for future module challenges.

Specs:

Use assertions to validate that the parameters passed into the function are integers
If a is grater than b, return a positive number
If a is less than b, return a negative number
If a and b are equal, return a zero
Here's an expected function prototype:

function compare(a, b);

*/


function compare(a, b) {
	/* for ints only */
	var result = (b - a);
	return result;
}

//when a > b, we get a positive number
console.log(compare(1,2));

//when a < b, we get a negatyive numb er
console.log(compare(2,1));

//when a === b, we get a zero
console.log(compare(2,2));

function compare2(a, b) {
	var result;
	// if parameter is of type number
	if( typeof a === "number"){
            // subtract b from a
            result = a - b;
        
    // if parameter is of type string
    } else if ( typeof a === "string"){
        // comparator for strings 
        if(a < b){
            result = 1;
        } else if ( a > b) {
            result = -1;
        } else {
            result = 0;
        }
    }
    return result;
}

//when a > b, we get a positive number
console.log(compare2("apple", "banana"));

//when a < b, we get a negatyive number
console.log(compare2("banana", "apple"));

//when a === b, we get a zero
console.log(compare2("banana", "banana"));
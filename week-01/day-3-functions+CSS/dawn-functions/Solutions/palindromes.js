

/* Boolean function that reverses a phrase and checks if it is a palindrome */
function isPalindrome(phrase ) {
	var reversePhrase = phrase.split('').reverse().join(''); 
    
    /* if palindrome */
    if(reversePhrase === phrase){
        return true;
    }
    else {
    /* if not a palindrome */
        return false;
    }
    /* Cheeky Ternary Operator Method */
    //return ((reversePhrase === phrase ) ? true : false );
}

// console.log(isPalindrome("racecar"));

function isPalindromicPhrase(phrase) {
	/* Strip spaces */
	phrase = phrase.split(' ').join('');
	/* Reverse phrase */
	var reversePhrase = phrase.split('').reverse().join(''); 

	/* We can call our previous palindrome function */
	//return isPalindrome(phrase);
	/* or make this a function without helpers. */
    if(reversePhrase === phrase){
        return true;
    }
    else {
    /* if not a palindrome */
        return false;
    }
}

// console.log(isPalindromicPhrase("madam im adam"));

/* Traverse the word with a for loop and check if palindrome */
/* Special props to Justin A for a great midway algorithm! */
function isNerdyPalindrome(phrase) {

	/* Establish the middle location of the phrase */
	var mid = phrase.length/2 + phrase.length/2%2 + 1;
	
	/* loop from beginning to middle of word */
	for (var i = 0; i < phrase.length/2; i++) {
		/* compare middleth and ith letters */
		if (phrase[mid] === phrase[i]){
			result = true;
		} else {
			result = false;
		}
		/* while i goes up, mid goes down */
		mid -= 1;
	}
	
	return result;

}

console.log(isNerdyPalindrome("RACECAR"));
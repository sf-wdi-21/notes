//Converting Celsius to Fahrenheit
//°Fahrenheit = °Celsius × 9/5 + 32
function celsToFahr (cels) {
	var fahr = ( cels * 9/5 ) + 32;
	return fahr;
}

//Converting Fahrenheit to Celsius
//°Celsius = (Farenheit - 32) × 5/9
function fahrToCels (fahr) {
	var cels = (fahr - 32) * 5/9;
	return cels;
}


// Converting Celsius to Kelvin
// Kelvin = Celsius + 273.15
function celsToKelv(cels) {
	var kelv = cels + 273.15;
	return kelv;
}


// Converting Fahrenheit to Kelvin
// Kelvin = (Fahrenheit + 459.67) × 5/9
function fahrToKelv(fahr) {
	var kelv = (fahr + 459.67) * 5/9;
	return kelv;
}

// *Converting Kelvin to Celsius *
// Celsius = Kelvin - 273.15

function kelvToCels(kelv) {
	var cels = kelv - 273.15;
	return cels;
}

// *Converting Kelvin to Farenheit *
// Fahrenheit = Kelvin × 9/5 - 459.67
function kelvToFahr(kelv) {
	var fahr = (kelv * 9/5) - 459.67;
	return fahr;
}

// This is a multi-line comment. I can comment on and on and on and on
/* TODO: 

	far to cels
	far to kel
	kel to far
	kel to cels

*/


function tempConverter(fromTemp, fromScale, toScale) {
	// this will be returned as our final result
	var result;
	// if user wants from cels
	if(fromScale === "cels") {
		
		// cels to fahr has been requested
		if( toScale=== "fahr") {
			
			result = celsToFahr(fromTemp);
		} 
		// cels to kelv has been requested
		else if(toScale === "kelv") {
			
			result = celsToKelv(fromTemp);
		}
	} 

	else if(fromScale === "fahr") {
		
		// fahr to cels has been requested
		if( toScale=== "cels") {
			
			result = fahrToCels(fromTemp);
		} 
		// fahr to kelv has been requested
		else if(toScale === "kelv") {
			
			result = fahrToKelv(fromTemp);
		}
	} 

	else if(fromScale === "kelv") {
		
		// kelv to fahr has been requested
		if( toScale=== "fahr") {
			
			result = kelvToFahr(fromTemp);
		} 
		// cels to kelv has been requested
		else if(toScale === "cels") {
			
			result = kelvToCels(fromTemp);
		}
	}
	return result;

}

console.log(tempConverter(0, 'cels', 'fahr'));
console.log(tempConverter(0, 'cels', 'kelv'));

console.log(tempConverter(32, 'fahr', 'cels'));
console.log(tempConverter(0, 'fahr', 'kelv'));

console.log(tempConverter(0, 'kelv', 'fahr'));
console.log(tempConverter(0, 'kelv', 'cels'));

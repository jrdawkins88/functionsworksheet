// Exercise 1
//First Function
var yell = function (string) {
	console.log(string.toUpperCase()); 
//Declaring a function that logs out uppercase version of a string. 

};
//Second Function
var yell10 = function (string) {
	for (var i = 0; i < 10; i++){
		yell(string); // <--Second Function uses First Function 
	}
};

yell10('string');

// Exercise 2

var max = function () {
	if (arguments[0] > arguments[1];) { // If Argument [0] is greater than Argument [1]
		return arguments[0]; //Argument [0] will be returned. 
	} else {
		return arguments[1]; // if argument [1] is greater than argument [0] Argument [0] will be returned
	}
};

// Exercise 3
//Function that returns longest of two input strings or arrays
var longest = function(a, b) {
	if (a.length > b.length) {
		return a;
	} else {
		return b;
	}
	
};
//Function that uses previous function to return longest word in a sentence. 
var findLongestWord = function (arr) {
	var longest = '';
	
	for (var i = 0; i < arr.length; i++) {
		arr[i]
		if (arr[i].length > longest.length) {
			longest = arr[i];
		}
	}
	return longest;
};

// exercise 4
//Function takes a character 
var isVowel = function (character) {
	character = character.toLowerCase(); // That is uppercase or lowercase
	if (character === 'a' || character === 'e' || character === "i" || character === "o" || character === "u" ) {
		return true; // that returns true if it is vowel 
	} else {
		return false; // that returns false if anything else
	}
};

// exercise 5
//Function that returns reversed version of input string
var reverseString = function (str) {
	var result = '';

	for (var i = str.length -1; i >= 0; i--) {
		result += str[i]; 
	}

	return result; 
};
//Function that uses previous fn to reverse every string in a single input array
var reverseStrings = function (arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = reverseString(arr[i]);
	}
};

var words = ['i,', 'like', 'turtles'];

reverseStrings(words);

console.assert(words[2] === 'selturt');

// exercise6
var adopt = function(character) {

	if  (color === 'black' ||
		(neutered && (g === 'm' && color !== 'white') || 
		(g === 'f' && color === 'white' || color === 'tan')) {

		}
			return true; 


};
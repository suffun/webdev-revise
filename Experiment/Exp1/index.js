// Log "Hello, World!" to console
console.log("Hello, World!");

// Calculate sum of two numbers
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;

// Show result in alert box
alert("Sum is: " + sum);


// Create an array of 5 cities
let cities = ["Mumbai", "Pune", "Delhi", "Chennai", "Kolkata"];

// Log total number of cities
console.log("Total cities:", cities.length);

// Add a new city at the end
cities.push("Bangalore");
console.log("After adding:", cities);

// Remove the first city
cities.shift();
console.log("After removing first city:", cities);

// Find index of a specific city
let index = cities.indexOf("Delhi");
console.log("Index of Delhi:", index);


// Read string from user
let str = prompt("Enter a sentence:");

// 1. Find length
console.log("Length of string:", str.length);

// 2. Extract "JavaScript" using slice()
let extracted = str.slice(str.indexOf("JavaScript"), str.indexOf("JavaScript") + "JavaScript".length);
console.log("Extracted word:", extracted);

// 3. Replace a word (example: replace "JavaScript" with "JS")
let newStr = str.replace("JavaScript", "JS");
console.log("After replacement:", newStr);

// 4. Palindrome function
function isPalindrome(input) {
    let cleaned = input.toLowerCase(); // ignore case
    let reversed = cleaned.split("").reverse().join("");
    
    return cleaned === reversed;
}

// Check palindrome
let check = prompt("Enter a word to check palindrome:");
if (isPalindrome(check)) {
    console.log(check + " is a Palindrome");
} else {
    console.log(check + " is NOT a Palindrome");
}
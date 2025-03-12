// A simple JavaScript program demonstrating basic concepts

// 1. Variables and Data Types
let message = "Hello, world!"; // String
const pi = 3.14159; // Number (constant)
let isTrue = true; // Boolean
let myVariable; // Undefined
let nullValue = null; // Null

console.log(message);
console.log("Pi:", pi);
console.log("Is true:", isTrue);
console.log("My variable:", myVariable);
console.log("Null value:", nullValue);

// 2. Arrays
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
console.log("Second element:", numbers[1]);

// 3. Objects
let person = {
  name: "Alice",
  age: 30,
  city: "New York",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log("Person:", person);
console.log("Person's name:", person.name);
person.greet();

// 4. Functions
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum);

// 5. Conditional Statements
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 6. Loops (for loop)
for (let i = 0; i < 5; i++) {
  console.log("Loop iteration:", i);
}

// 7. Loops (while loop)
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// 8. String manipulation
let text = "JavaScript is fun!";
console.log("Text length:", text.length);
console.log("Uppercase text:", text.toUpperCase());
console.log("Includes 'fun':", text.includes("fun"));

// 9. DOM manipulation (in a browser environment)
// Example: changing the text of an element with id "myElement"
// document.getElementById("myElement").textContent = "New text!";

// 10. Event handling (in a browser environment)
// Example: adding a click event listener to a button with id "myButton"
// document.getElementById("myButton").addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// 11. Array methods
let doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log("Doubled numbers:", doubledNumbers);

let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

let total = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Total of numbers array: ", total);

// 12. Try...catch
try {
  // Attempting to access an undefined variable
  console.log(undefinedVariable);
} catch (error) {
  console.error("An error occurred:", error.message);
}

console.log("Program completed.");

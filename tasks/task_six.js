
//Task: Missing parentheses
// Incorrect code
if (x === 5 {
  console.log("x is equal to 5");
}

// Corrected code
if (x === 5) {
  console.log("x is equal to 5");
}









//Task: Missing semicolon
// Incorrect code
const message = "Hello, world"
console.log(message)

// Corrected code
const message = "Hello, world";
console.log(message);





//Task: Incorrect closing brace placement
// Incorrect code
function sayHello() {
  console.log("Hello!");
} 
console.log("Goodbye!");

// Corrected code
function sayHello() {
  console.log("Hello!");
}
console.log("Goodbye!");   //The closing brace should be placed after the function call, not after the function declaration




//Task: Mismatched opening and closing brackets
// Incorrect code
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2];

// Corrected code
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);









//Task: Incorrect function definition
// Incorrect code
const addNumbers = function(x, y)
  return x + y;
};
console.log(addNumbers(5, 10));

// Corrected code
const addNumbers = function(x, y) {
  return x + y;
};
console.log(addNumbers(5, 10));

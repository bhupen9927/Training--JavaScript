// Array destructuring in JavaScript is a syntax that allows you to extract values from arrays and assign them to variables in
// a more concise and readable way. It provides a convenient way to unpack values from arrays into separate variables.

// Here's how array destructuring works:

// Basic Syntax:
// You use square brackets [] on the left side of the assignment to indicate that you're destructuring an array. 
//You then specify the variables you want to assign the array elements to inside the brackets.

const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Outputs: "red"
console.log(secondColor); // Outputs: "green"
console.log(thirdColor);  // Outputs: "blue"


//Skipping Elements:
//You can skip elements in the array by leaving empty spaces in the destructuring assignment.

const numbers = [1, 2, 3, 4, 5];

const [firstNumber, , thirdNumber, , fifthNumber] = numbers;

console.log(firstNumber);  // Outputs: 1
console.log(thirdNumber);  // Outputs: 3
console.log(fifthNumber);  // Outputs: 5


//Rest Syntax:
//You can use the rest syntax (...) to gather the remaining elements of an array into a new array.

const number = [1, 2, 3, 4, 5];

const [firstNumbers, ...restNumbers] = number;

console.log(firstNumbers);   // Outputs: 1
console.log(restNumbers);   // Outputs: [2, 3, 4, 5]

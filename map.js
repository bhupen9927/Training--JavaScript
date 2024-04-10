const arr = [5, 1, 3, 2, 6];
// Task 1: Double the array element: [10, 2, 6, 4, 12]
function double(x) {
  return x * 2;
}
const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
console.log(doubleArr); // [10, 2, 6, 4, 12]

// Task 2: Triple the array element
const arr1 = [5, 1, 3, 2, 6];
// Transformation logic
function triple(x) {
  return x * 3;
}
const tripleArr = arr1.map(triple);
console.log(tripleArr); // [15, 3, 9, 6, 18]


// Task 3: Convert array elements to binary
const arr2 = [5, 1, 3, 2, 6];
// Transformation logic:
function binary(x) {
	return x.toString(2);
}
const binaryArr0 = arr2.map(binary);

// The above code can be rewritten as :
const binaryArr1 = arr.map(function binary(x) {
	return x.toString(2);
});

// OR -> Arrow function
const binaryArr2 = arr.map((x) => x.toString(2));


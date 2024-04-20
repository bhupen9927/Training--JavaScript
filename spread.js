const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Outputs: { a: 1, b: 2, c: 3, d: 4 }

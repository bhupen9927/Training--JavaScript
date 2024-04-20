let myMap = new Map();

let key1 = 'key1';
let key2 = {};
let key3 = function() {};

// Set key-value pairs
myMap.set(key1, 'value1');
myMap.set(key2, 'value2');
myMap.set(key3, 'value3');

// Get values by key
console.log(myMap.get(key1)); // Outputs: "value1"
console.log(myMap.get(key2)); // Outputs: "value2"
console.log(myMap.get(key3)); // Outputs: "value3"

// Check if a key exists
console.log(myMap.has(key1)); // Outputs: true

// Get the number of entries
console.log(myMap.size); // Outputs: 3

// Iterate over key-value pairs
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Delete an entry by key
myMap.delete(key1);
console.log(myMap.has(key1)); // Outputs: false

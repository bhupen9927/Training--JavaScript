let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Outputs: true

// Remove obj1 from the WeakSet
weakSet.delete(obj1);

console.log(weakSet.has(obj1)); // Outputs: false


//Weakmap

let weakMap = new WeakMap();

let key1 = {};
let key2 = {};

weakMap.set(key1, 'value1');
weakMap.set(key2, 'value2');

console.log(weakMap.get(key1)); // Outputs: "value1"
console.log(weakMap.has(key2)); // Outputs: true

// Remove key1 from the WeakMap
weakMap.delete(key1);

console.log(weakMap.has(key1)); // Outputs: false

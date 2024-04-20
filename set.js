let mySet = new Set([1, 2, 3]);
// Or
let anotherSet = new Set();
anotherSet.add(1);
anotherSet.add(2);
anotherSet.add(3);

mySet.add(4);
mySet.delete(3);

console.log(mySet.has(4)); // Outputs: true

mySet.forEach(function(value) {
    console.log(value);
  });

  // Or

  for (let value of mySet) {
    console.log(value);
  }

  console.log("size "+mySet.size);

  
// rest parameter with array

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

  function logItems(...items) {
    items.forEach(item => {
      console.log(item);
    });
  }
  
  logItems('apple', 'banana', 'orange');

  
  // rest with objects

  function mergeProperties(base, ...objects) {
    objects.forEach(obj => {
      Object.keys(obj).forEach(key => {
        base[key] = obj[key];
      });
    });
    return base;
  }
  
  const baseObject = { a: 1, b: 2 };
  const mergedObject = mergeProperties(baseObject, { b: 3 }, { c: 4 });
  
  console.log(mergedObject);

  
  function mergeObjects(base, ...objects) {
    return objects.reduce((merged, obj) => {
      return Object.assign(merged, obj);
    }, base);
  }
  
  const baseObjects = { a: 1, b: 2 };
  const newObj = mergeObjects(baseObjects, { b: 3 }, { c: 4 });
  
  console.log(newObj); // Outputs: { a: 1, b: 3, c: 4 }
  
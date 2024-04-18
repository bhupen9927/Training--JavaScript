//for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  
//while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


//do-while


let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);


//for-in loop

// Used to iterate over the properties of an object.
// Provides access to the keys (property names) of the object.
// When iterating over the properties of an object.
// When you need access to both the keys and the corresponding values of an object.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

  
//for-of loop

// Used to iterate over iterable objects like arrays, strings, etc.
// Provides direct access to the values of the elements in the collection.
// When iterating over arrays, sets, maps, or other iterable objects.
// When you're interested in the values of the elements rather than their indices or keys.

const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}


// foreach

const number = [1, 2, 3, 4, 5];

number.forEach(function(num) {
  console.log(num);
});




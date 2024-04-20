// Define a class named "Person"
class Person {
    // Constructor function to initialize object properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to greet
    greet() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  // Create an object (instance) of the Person class
  let person1 = new Person('Bhuppi', 24);
  let person2 = new Person('Bharat', 25);
  
  // Call the greet method of the objects
  console.log(person1.greet()); // Outputs: "Hello, my name is John and I'm 30 years old."
  console.log(person2.greet()); // Outputs: "Hello, my name is Alice and I'm 25 years old."

  // Define a parent class named "Animal"
class Animal {
    // Constructor function to initialize object properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to make the animal sound
    makeSound() {
      return 'Animal makes a sound';
    }
  }
  
  // Define a child class named "Dog" that inherits from "Animal"
  class Dog extends Animal {
    // Constructor function specific to Dog
    constructor(name, age, breed) {
      // Call the constructor of the parent class
      super(name, age);
      this.breed = breed;
    }
  
    // Method to make the dog bark
    makeSound() {
      return 'Woof!';
    }
  
    // Method to display information about the dog
    displayInfo() {
      return `Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`;
    }
  }
  
  // Create an object (instance) of the Dog class
  let dog1 = new Dog('Buddy', 5, 'Labrador');
  
  // Call methods of the object
  console.log(dog1.displayInfo()); // Outputs: "Name: Buddy, Age: 5, Breed: Labrador"
  console.log(dog1.makeSound());   // Outputs: "Woof!"

  
  
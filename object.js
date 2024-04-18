


//singleton=> make using constructors
//object.create

//object literals

let k=Symbol("k");

let user={
    name:"bhuppi",
    "full_name":"Bhupendra Singh",
    [k]:"myKey123",
    age:24,
    location:"Dehradun",
    email:"bhupen@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

user.greeting=function(){
  console.log("Hello User");
}
user.greeting1=function(){
  console.log(`Hello user${this.full_name}`)
}
console.log(user.greeting1());
console.log(user.greeting());
console.log(user.email);
console.log(user["email"]);  ///second way to access
console.log(user["full_name"]);
console.log(typeof user[k])
console.log(user[k])

//change the object value
user.email="bhupendrasingh32709@gmail.com";
Object.freeze(user);
user.email="bhuppi9927@gmail.com";
console.log(user);


// Create a symbol
const mySymbol = Symbol('mySymbol');

// Create an object with a symbol property
const myObject = {
  [mySymbol]: 'Symbol property value'
};

// Access and print the symbol property value
console.log(myObject[mySymbol]); // Outputs: Symbol property value
console.log(typeof(myObject[mySymbol]))
console.log(typeof(mySymbol))


let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue"
};
console.log(car.brand);  // Outputs: Toyota
console.log(car['model']); // Outputs: Corolla


let calculator = {
  operand1: 0,
  operand2: 0,
  add: function() {
    return this.operand1 + this.operand2;
  },
  subtract: function() {
    return this.operand1 - this.operand2;
  },
  setOperands: function(op1, op2) {
    this.operand1 = op1;
    this.operand2 = op2;
  }
};

calculator.setOperands(5, 3);
console.log(calculator.add());       // Outputs: 8 (5 + 3)
console.log(calculator.subtract());  // Outputs: 2 (5 - 3)


let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  greet: function() {
    return "Hello, my name is " + this.fullName();
  }
};


let account = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
    return "Deposit of $" + amount + " successful. Current balance: $" + this.balance;
  },
  withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return "Withdrawal of $" + amount + " successful. Current balance: $" + this.balance;
    } else {
      return "Insufficient funds.";
    }
  }
};


let product = {
  name: "Smartphone",
  price: 499.99,
  discountedPrice: function(discountPercent) {
    let discountAmount = this.price * (discountPercent / 100);
    return this.price - discountAmount;
  }
};

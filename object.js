


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

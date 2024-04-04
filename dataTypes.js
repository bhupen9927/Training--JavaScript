console.log("bhuppi");

"use strict"; // treat all JS Code as a new version
// alert(3+3) we are using node js not browser

console.log(3+3)
console.log("Bhupendra Singh");

let name="Bhuppi"
let age=24
let isLoggedIn=false

//data Types
/*
number=>2 to power53
bigint
string=>""
boolean=>true/false
null=>standalone value, sign of empty value , example of temprature
undefined=>
symbol=>find uniqueness in react


Object

*/

console.log(typeof null) //object
console.log(typeof undefined)  //undefine d



function one(){
    var name="bharat";
    function third(){
    console.log(name);
        
    }
    third();
   
}
one();


const arr= [1,2,3,4];
//arr =[1,2,3];
console.log(arr)

let n=10;
const change=n.toString();
console.log(change);
console.log(typeof(change))
const v=Number(change);
console.log(typeof(v))

function test() {
    var foo = undefined + 33;
    console.log(foo)
    if (foo) {
      //let foo = foo + 55; // ReferenceError
    }
  }
  test();

//   var fruit = 'apple'

// function gimmeFruit() {
//   var fruit = 'orange'
//   console.log(fruit) // ??
// }

// console.log(fruit) // ??
// gimmeFruit()

var fruit = 'apple'

{
  var fruit = 'orange'
  console.log(fruit) // ??
}

console.log(fruit) // ??
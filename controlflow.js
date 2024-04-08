//if

if(2 == "2"){
    console.log("executed")
}

//strick type check
if(2 === "2"){
    console.log("executed")
}
else{
   console.log("Unexecuted because of strict type check") 
}

//implicit scope
const balance=1000

if(balance>500) console.log("yes balance is greater than 500");

//Switch case

// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }

/*

Falsy Values->
false, 0, -0, BigInt-> 0n, null, undefined, NaN

Truthy Values->
true, 1, "0", 'false', " ", [], {}, function(){}

*/

//check array is empty or not

let arr=[]
if(arr.length===0){
    console.log("array is empty")
}

let obj={}
if(Object.keys(obj).length===0){
    console.log("object is empty")
}

//false == 0    =>true
//false == ""   =>true
//0==""         =>true

//Nulish Coalescing Operator (??): null undefined

let val1;
val1=5 ?? 10
//val1= null ?? 10    => assign value 10
//val1= null ?? 10 ?? 30  =>assign first value is 10

console.log(val1);


//Ternary  operator
// condition ? true : false

const price=100
price<=80 ? console.log("less than 80") : console.log("more than 80")



//Switch Case
let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);
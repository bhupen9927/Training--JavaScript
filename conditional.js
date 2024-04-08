let a = 14;  // prompt is not work here, it is work on browser console
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  console.log("You are a kid and you can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}
console.log("Done")

console.log("You can", (a<18? "not drive" :"drive"))



let age = 4
console.log(typeof (age))
age = Number.parseInt(age)
console.log(typeof (age))
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}


let agee = 12
switch (agee) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}


let num = 57
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}


// Problem No 5
let aged = 19
let aa = age > 18 ? "You can drive" : "You cannot drive"
console.log(aa)
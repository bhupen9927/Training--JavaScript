//Dates

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  //object

let myCreateDate= new Date(2023,0,23);
console.log(myCreateDate.toDateString());

let myCreateDate1= new Date(2023,0,23,5,3);
console.log(myCreateDate1.toLocaleString());

let myCareateDate2=new Date("2023-01-14");
console.log(myCareateDate2.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

const newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
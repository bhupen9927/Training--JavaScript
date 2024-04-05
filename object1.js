
const tinderUser=new Object()
console.log(tinderUser)

const tinderUser1={}
tinderUser.id="123abc"
tinderUser.name="bhuppi"
tinderUser.isLoggedIn= false;

console.log(tinderUser)

const regularUser={
    email:"bhuppi@gmail.com",
    fullname:{
        userfullname:{
            firstname:"bhupendra",
            lastname:"singh"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3=Object.assign({},obj1, obj2);
console.log("using assign method",obj3);

//using spread operator similar to array

const obj4={...obj1, ...obj2}
console.log("Using Spread operator",obj4)

const users=[
    {
        id:1,
        email:"bhu@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"bh@gmail.com"
    }
]
console.log("print the object from aaray",users[0].email);

console.log("print object keys ",Object.keys(tinderUser));
console.log("print object values=>",Object.values(tinderUser))
console.log("print object entries=>",Object.entries(tinderUser));

console.log("For checking the property, have or not")
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

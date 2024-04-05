//Destructuring of Object

const course={
    coursename:"javascript",
    price:"999",
    courseInstructor:"bhupen"
}

const{courseInstructor: instructor}=course  //courseInstructor called as Instructor
console.log("print courseInstructor name is",instructor);



const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

 //for in loop for object iterate
 for(const key in obj)
 {
    console.log(`${key} shortcut is for ${obj[key]}`)
 }

 //for in loop for arrays
 const program=["js","rb","py","java","cpp"]

 for(const i in program){
    console.log(program[i])
 }

 //for in loop for map
//not iterable using for in loop 


//  const map= new Map()
// map.set('In',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('In',"India") 

// for(const i in map){
//     console.log(i)
// }
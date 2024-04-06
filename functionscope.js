
let a=100;       //block scope
const b=20;     // block scope
//var c=300;       //global scope

//{}=> it is a scope

if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log("block scope",a)
}

console.log("ouside of block",a);
//console.log(b);
console.log(c);


//Nested  Scope

function one(){
    const username="Bhupendra"

    function two(){
        const website="youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website); webite can not be accessed by function one
    // because of website store in the function two

    two()
}

one()


//************* */

console.log("hoisting",addone(5));    //hoisting
function addone(num){
    return num+1;
}



//Expression 
const addtwo= function(num){
    return num+2;
}
console.log("5 increment two",addtwo(5));

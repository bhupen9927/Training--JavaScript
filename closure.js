function outer(){
    outValue=10;
    return function test(){
        innerValue=20;
        return function inner(){
            return outValue*innerValue
        }
        
    }
    
}
let test=outer();
let inner=test();

console.log(inner());


function fun(){
    let a=200;
    let f=function inn(){
        a++;
        return a;
    };
    return f;
}

let inn=fun();

console.log(inn());
console.log(inn());
console.log(inn());
console.log(inn());
console.log(inn());
console.log(inn());


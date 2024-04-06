//Immediately Invoked Function (IIFE)

(function one(){
    //Named IIFE
    console.log(`DB CONNECTED`)
}());
//when problem from global scope pollution , remove global scope pollution
// to use IIFE


(()=> {
    console.log(`DB CONNECTED TWO`);
})();

((name)=> {
    console.log(`DB CONNECTED THREE ${name}`);
})('Bhupendra Singh');
let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  console.log("Hello!");
}

setTimeout(function name(){
    console.log("bhuppi");
},3000)
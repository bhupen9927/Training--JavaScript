let obj={
    name:'bhupendra'
}

let user=obj;
user.name='bharat';

console.log("obj name is:- ",obj);
console.log("user name is:-", user);

//problem is original object reference(memory address) is copied,

//solve this problem using shallow copy

//solution one is:-

let ob={
    name:'deo'
}
let userOne=Object.assign({},ob);
userOne.name='deovrath';

console.log("ob name is:- ",ob);
console.log("userOne name is:- ",userOne);

//Solution second of Desturcturing method-

let object={
    name:'bhuppi'
}
let userTwo={...object}
userTwo.name='Bhupendra Singh';

console.log("object name is:-",object);
console.log("userTwo name is:-",userTwo);

// but in shallow copy is one another problem its work on the only one level of the object means its not work on the inner object of the object

let objOne={
    name:'bhupen',
    address:{
        city:'haldwani',
        state:"UK"
    }
}

let userThree={...objOne};
userThree.address.city='noida';

console.log("objOne city is:-",objOne);
console.log("userThree city is:-",userThree);

//here origianl object city is change 

// to tackle this proble use deep copy of the object 
// firstly convert object to string 
// and after that convert string to object

let objTwo={
    name:"Bhupendra Bisht",
    address:{
        city:"nainital",
        state:"Uttarakhand"
    }
}

let userfour=JSON.parse(JSON.stringify(objTwo));
userfour.address.city= "gurgaon";

console.log("objtwo address city is ",objTwo);
console.log("userfour address city is ", userfour);

// In deep copy is the limitations -

//if function or date inside the object if your applying the deep copy then your function and date are not work or shown, if date is shown
// but its not work as a actual date

// to tackle this problem use lodash library

// lodash npm for react or angular
// lodash cdn for normal javascript

// copy lodash cdn path and paste it in the html file in head section using script tag

let objThree={
    name:"Bhupendra Bisht",
    address:{
        city:"nainital",
        state:"Uttarakhand"
    },
    getData:function(){
        return "All datais here"
    }
}

let userfive=_cloneDeep(objThree);
userfour.address.city= "gurgaon";

console.log("objtwo address city is ",objThree);
console.log("userfour address city is ", userfive);


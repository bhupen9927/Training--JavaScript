// for-of and for-in are two different looping constructs in JavaScript.

// for-of is used to iterate over the values in an iterable object, such as an array or a string. 
// It allows you to access the values of the object directly, without having to use an index.

// Here is an example of using for-of to loop over the characters in a string:

const name= "Bhupendra Singh"
for(const n of name){
    console.log(n)
}

// On the other hand, for-in is used to iterate over the enumerable properties of an object. 
// It allows you to access the keys of the object, rather than the values.

// Here is an example of using for-in to loop over the properties of an object:

const obj={
    a:1,
    b:2,
    c:3
}
for(const ob in obj){
    console.log(ob)
}



// It's important to note that for-in will also iterate over any inherited properties of an object. 
// If you only want to iterate over the object's own properties, you can use Object.
// keys() or Object.entries() in combination with a for-of loop.

const object={
    aa:1,
    ba:2,
    ca:3
}
for(const o of Object.keys(object)){
    console.log(o)
}
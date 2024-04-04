const name="Bhupendra Singh";
const Course=" MCA"
const age=24;
 console.log(name+Course+age+" GEHU") // it is older way , Not recomended

 console.log(`Hello My Name is ${name} and my Course is${Course} and my age is ${age}`)
//it is string interpolation

const gameName=new String('bhuppi-sin')
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("p"));

const newString=gameName.substring(0,4)
console.log(newString);

const another=gameName.slice(-4,4);

const newStringOne= "     bhuppi    ";
console.log(newStringOne);
console.log(newStringOne.trim());  //remove white spaces

const url="https://bhuppi.com/bhuppi%20singh"
console.log(url.replace('%20','-'));

console.log(url.includes('bhuppi'));

//convert to array
console.log(gameName.split('-'));
/*
const gamename=new String('bhuppi')
undefined
gamename
String {'bhuppi'}
0: "b"
1: "h"
2: "u"
3: "p"
4: "p"
5: "i"
length: 6
[[Prototype]]: String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()n
ormalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "bhuppi"
*/

// convert string to lower case
let inputString = "BHupen";
let lowerString = '';

// Convert each character in the string to lowercase
for (let i = 0; i < inputString.length; i++) {
    lowerString += inputString[i].toLowerCase();
}

console.log("String in lowercase: " + lowerString);
const marvel_heros=["thor","ironman","spiderman"];
const dc=["superman","flash","batman"];

//marvel_heros.push(dc);
//console.log(marvel_heros);  //print array in array and not recomended

//use concat for better result
const all_heros=marvel_heros.concat(dc);
console.log(all_heros);

//using spread operator
const all_new_heros=[...marvel_heros, ...dc];
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


//convert to array
console.log(Array.from("Bhupendra"));

console.log(Array.from({name:"bhuppi"})); //return a empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["supermane","flash","batman"]

// marvel_heros.push(dc);

// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);


// sperad operator

const all_new_heors = [...marvel_heros, ...dc];
// console.log(all_new_heors);

const another_arry = [1,3,3,[4,5,6],7,8,[6,7,[4,5]]]

const realAnotherArray = another_arry.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("Champion"))
console.log(Array.from("Champion"))
console.log(Array.from({name:"Challanger"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


// Primitive (value type)

// 7 types
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt



const score = 100


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 1434234234234n;

// console.log(typeof(bigNumber));



// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["12","123"]
console.log(typeof(heros));

let myObj = {
    name: "champ",
    age: 22,
}

console.log(typeof(myObj));

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof(myFunction));
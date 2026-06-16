// falsy

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy

// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish coalescing operator ??: null undefined  

// let val1 = null ?? 10
// val1 = undefined ?? 15

const price = 100;

price >= 100 ? console.log("true") : console.log("false")

// Infinity loop added
for (let i = 0; i < (1/0); i++) {
    console.log("Champion")
}

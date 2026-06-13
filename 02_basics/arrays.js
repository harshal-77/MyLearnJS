const myArr = [12,3,2,21,1,1,1,"champion",3,3,4,5];
// console.log(myArr);

// console.log(typeof myArr);

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2);

// Array methods

// myArr2.push(55);
// myArr2.pop()

// myArr2.unshift(9)
myArr2.shift()
// console.log(myArr2);


// console.log(myArr.includes(2))
// console.log(myArr.indexOf(12));

const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const my1 = myArr.slice(1,3);

console.log(my1);
console.log("B ", myArr);
console.log(" ");

const my2 = myArr.splice(1,3);
console.log(my2);
console.log(myArr);


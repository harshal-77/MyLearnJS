let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);


let myCreatedDAte = new Date(2026,0,26)
// console.log(myCreatedDAte.toDateString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);


console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate)
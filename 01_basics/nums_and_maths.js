const score = 50;
// console.log(score);

const balance = new Number(200)
// console.log(balance);



// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 23.895523

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


///// ********************************* Maths ************************

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.random()*10000);
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random()*10)+1);



// const min = 10
// const max = 20

const min = 1;
const max = 100;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    for (;;) {
        console.log(Math.floor(Math.random() * (max - min + 1)) + min);
        await sleep(500); // 1-second delay
    }
})();
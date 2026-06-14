// Immediately Invoked Function Expression (IIFE)

(
function chai(){
    // Name IFFE
    console.log(`DB connected`)
})();

((name)=>{
    console.log(`DB Connected to ${name}`)
})("Champion");

function sayMyName(){
    console.log("Champion")
}

// sayMyName()

function addTwoNumbers(num1, num2){
    return num1 + num2
}

const result = addTwoNumbers(1, 9)

// console.log("Result: ", result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    else{
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage())




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(1,2,4,5))

const user = {
    username : "Champion",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 3902
})


const myNewArray = [1,2,3,4]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([1,323,2323]))
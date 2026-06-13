// Singleton

// Object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name : "Challanger",
    age : 13,
    "full name": "Champion",
    [mySym] : "mykey1",
    location: "Mumbai",
    email: "Challanger@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]
}



// console.log(JsUser.email);
// console.log(JsUser["full name"])
// console.log(JsUser["email"])
// console.log(JsUser[mySym])


/// What is the use of symbol in js


JsUser.email = "threat@gmail.com"
// Object.freeze(JsUser);

JsUser.email = "analysis@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
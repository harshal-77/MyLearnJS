const user = {
    username: "Champion",
    price : 80,

    welcomeMessage: function(){
         console.log(`${this.username} , welcome to website`)
         console.log(this)
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Champ"
//     console.log(this).username
// }
// chai()

const chai = () => {
     let username = "Champ"
    console.log(this)
}
// chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username:"champion"})


console.log(addTwo(1,2))


// const myArray = [2,5,6,3,1]

// myArray.forEach(()=>())
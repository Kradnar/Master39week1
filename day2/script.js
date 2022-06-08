// let firstName = "Pete"
// console.log(firstName)

// console.log(2 + 2) //Addition
// console.log(2 - 2) //Subtraction
// console.log(2 * 2) //multiply
// console.log(2 ** 2) //power of
// console.log(2 / 2) //divide
// console.log(2 % 2) //modulus
//console.log(2 ++ 2) //increment (wrong syntax)
//console.log(2 -- 2) //decrement



// let x = 5
// let y = 2

// //x += y
// x -= y
// x *= y
// x /= y
// x %= y

// console.log(x)


// let favDrink = "coffee"
// console.log("My Favourite Drink is " + favDrink, "It's great")
// console.log(`My Favourite Drink is ${favDrink}s`);


//----Activity 1 -----

let firstName = "Pete"
let age = 46
let favColour = "purple"

console.log(`Hello my name is ${firstName}`, "I am the grand old age of " + age, "and my favourite Colour is", favColour + ".")


//----Activity 2-----

let breakfast = "Cereal"
let lunch = "Chips"
let dinner = "Sandwiches"

console.log(`I will have ${breakfast} for breakfast,`, "I will have " + lunch, "for lunch and", dinner, "for dinner.")

breakfast = "Crumpets"
lunch = "Burgers"
dinner = "anything I can lay my hands on"

console.log(`I've changed my mind and will now have ${breakfast} for breakfast,`, "I will have " + lunch, "for lunch and", dinner, "for dinner.")


//----Activity 3-----

// let birthday = [23,11] // enter your birthday, [day, month].
// let today = new Date()
// month = today.getMonth() + 1
// day = today.getDate()
// monthsTillBirthday = Math.abs(birthday[1] - month)
// daysTillBirthday = Math.abs(birthday[0] - day)
// console.log(`There are ${monthsTillBirthday} months and ${daysTillBirthday} days till your birthday.`)


let date = new Date('06/07/2022')
let birthday = new Date('10/15/2022')
let days = birthday.getTime() - date.getTime() 
let result = days / (1000 * 3600 * 24)
console.log(Math.floor(result))

//----Activity 4-----

let topLeft = "X"
let topMid = "O"
let topRight = " "
let midLeft = "X"
let midMid = "X"
let midRight = " "
let bottomLeft = "O"
let bottomMid = " "
let bottomRight = " "
console.log("   |   |   ")
console.log("",topLeft + " | " + topMid + " | " + topRight)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("",midLeft + " | " + midMid + " | " + midRight)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("",bottomLeft + " | " + bottomMid + " | " + bottomRight)
console.log("   |   |   ")


//-------------------------------------------------------

// let game = "racing"

// if (game.toLowerCase() == "fighting") {
//     console.log("Time for some pugilism");
// } else if (game.toLowerCase() == "sport") {
//     console.log("I'm a good sport")
// } else if (game.toLowerCase() == "racing") {
//     console.log("I feel the need for speed");
// } else {
//     console.log("lets play something else");
// }


//  == check value
//  === checks value and datatype

//--- logical operators

// && = and (both conditions must be true)
// || = or (either condition can be true)


// let num = 8

// if(num % 2 === 0){
//     console.log("even")
// } else {
//     console.log("odd")
// }

//--------------------------------------------

// let game = "spider-man"
// let machine = "PC"

// if (machine.toUpperCase() == "PS4" && game.toLowerCase() == "spider-man") {
//     console.log("You can play this")
// } else {
//     console.log("Sorry incompatible")
// }

//-----------------------------

// let game = "call of duty"
// let machine = "XBOX"

// if (machine.toUpperCase() == "PS4" || game.toLowerCase() == "call of duty") {
//     console.log("You can play this")
// } else {
//     console.log("what do you want to play")
// }


//---------Switch----------------

switch(something){
    case "first thing":
    case "second thing":
        console.log("say something");
        break;
    
}


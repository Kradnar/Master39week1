// console.log("Hello World".length)  // String - length overrides the string and deplays length
// console.log(2 + 3) // Number
// console.log(true)  // Boolean

// console.log("hello"[0].toUpperCase())

// console.log(Math.random()*10, Math.round(0.9))


// console.log(Math.round(5.49))

// console.log(Math.floor(Math.random()* 10));


// ----------------------------------------------

// let firstName = "Pete"

// console.log(firstName.toUpperCase())
// console.log(firstName.charAt(0).toUpperCase())
// console.log(firstName + " likes pizza")

// firstName = "Dad"

// console.log(firstName.toUpperCase())
// console.log(firstName.charAt(0).toUpperCase())
// console.log(firstName + " doesn't like pizza")


//-------------------------------------------------
// Challenge 1


// function column() {
//     console.log("   |   |   ")
//     console.log("   |   |   ")
//     console.log("   |   |   ")
// }
// let row = "-----------"

// column()
// console.log(row)
// column()
// console.log(row)
// column()

//----------------------------------------------------

// function column() {
//     console.log("   |   |   \n".repeat(3))
// }
// let row = "-----------"

// column()
// console.log(row)
// column()
// console.log(row)
// column()

//-------------------------------------------------------

let column = "   |   |   "
let row = "-----------"
array = [column, column, column, row, column, column, column, row, column, column, column]
console.log(array.join('\n'))

//-------Challenge 2-----

// ver 1
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);}
console.log(capitalizeFirstLetter('hello'));

// ver 2
let string = 'hello'
capString = string[0].toLocaleUpperCase() + string.substring(1)
console.log(capString)

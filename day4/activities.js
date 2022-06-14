//*---- Activity 1
//

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));


// const factorial2 = (n2) => {
//     if ((n2 === 0) || (n2 === 1)) {
//         return 1;
//     } else {
//         return (n2 * factorial2(n2-1));
//     }
// }
// console.log(factorial2(33));



//*---- Activity 2

// let orderCount = 0;
// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }

// takeOrder("ham", "pineapple");
// takeOrder("Pepperoni", "Extra Pepperoni")

//*---- Activity 3

//! Objects

//*---- Activity 1

const person = {
    name: "Bob",
    age: 44,
    hascar: true,
    favmovies: [
        "Matrix",
        "Star Wars"
    ],
    favsongs: [
        "Dream on",
        "Poison"
    ],
    sayHi() {
        console.log(`Hello my name is ${this.name}`)
    } 
}

person.sayHi()


//*---- Activity 2

const pet = {
    name: "Crookshanks",
    typeOfPet: "Cat",
    age: 2,
    colour: "ginger",
    EatDrink() {
        console.log(`Hello my name is ${this.name} and I eat food and drink liquids`)
    }
}
pet.EatDrink()

//*---- Activity 3

const coffeeShop = {
    branch: "Manchester",
    coffee: 1,
    tea: 1,
    chips: 1,
    burger: 1,
}

let drinksOrdered = [(coffeeShop.coffee *3) + (coffeeShop.tea *1)]
let foodOrdered = [(coffeeShop.chips *4) + (coffeeShop.burger *2)]

console.log(`Your order for drinks comes to ${drinksOrdered}`)
console.log(`Your Order for food comes to ${foodOrdered}`)
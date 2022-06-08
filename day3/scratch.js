let favDrinks = [
    "coffee",
    "coke",
    "cider"
]
// console.log(favDrinks[0])
// console.log(favDrinks[1])
// console.log(favDrinks[2])

//---For Loop

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}


let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`);

//---While Loop

let i = 0
while(i < favDrinks.length){
    console.log(favDrinks[i])
    i++
}


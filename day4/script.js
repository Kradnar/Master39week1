//--- 3 types

// //---arrow
// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds")
// }

// pressGrindBeans();

let coffeeIsGrinding = false

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();
pressGrindBeans();

const greeting = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}`);
}

greeting("Pete", "Daniel")

let add = (num1,num2) => {
//    return num1 + num2
}
console.log(add(2, 3))

const multByNineFifths = (celsius) => {
    return celsius * (9/5)
};

const getFahrenheit = (celsius) => {
    return multByNineFifths(celsius) +32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F");

// Output: The Temp is 59oF

const divideByNineFifths = (fah) => {
    return fah - 32;
};

const getCelsius = (fah) => {
    return divideByNineFifths(fah) * 5/9;
};

console.log("The temperature is " + getCelsius(59) + "°F");



//---function

function square(number) {
    return number * number;
};

square(5)
// Output 5


//---------------------

//?       Objects



console.log(person.name)
console.log(person["name"])

let offer = "none";
let time = 1200;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: [
      "Cappuccino",
      "Latte",
      "Filter Coffee",
      "Tea",
      "Hot Chocolate"],


  breakfastOffer: "Free Croissant with Coffee",
  lunchOffer: "Free Drink with Sandwich",
  noOffer: "Sorry no offer",
};


if (time < 1100) {
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
  } else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
  }



const alarmobj = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}

let day = "Monday";
let alarm = true;

if (day == "Saturday" || day == "Sunday") {
    alarm = false
    console.log(alarmobj.weekendAlarm)
} else {
    alarm = true
    console.log(alarmobj.weekdayAlarm)
}

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
    ]
}

console.log(person.favsongs[1])

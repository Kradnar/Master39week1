// Activity 1
// Create an array that lists your favourite films, up to five elements
// Add 2 more using a method
// Use a loop to cycle through the array

let films = [
    "Star Wars",
    "Harry Potter",
    "Avatar",
    "Tron",
    "Blade Runner"
]
films.splice(2, 0, "Alien", "Predator")

let i = 0
while(i < films.length){
    console.log(films[i])
    i++
}

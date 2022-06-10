// Activity 4
// Display 4 films stored in an array
// Use a for loop to show each film in the array
// Use an if statement to check if the 3rd film in the array is Ghostbusters
// If it is return "Yay Ghostbusters!" If it isn't return "Boo! We want Ghostbusters"


let movies=["Ghostbusters", "Ghostbusters II", "Ghostbusters 2016", "Ghostbusters Afterlife"]
for (let films = 0; films < movies.length; films++){
    console.log(movies[films])
}
if (movies[2] == "Ghostbusters"){
    console.log("Yay Ghostbusters!")
}
else {
    console.log("Boo! We want Ghostbusters!")
}

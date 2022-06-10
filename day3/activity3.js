// Activity 3
// If we  can create a loop to put 0 - 9 on the screen, how can we count 9 - 0? Create a program that does this


let count = 0
while(count < 10){
    console.log(count)
    count++
}
console.log("and in reverse")
count--
while(count >= 0){
    console.log(count)
    count--
}

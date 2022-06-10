// Activity 5
// Generate a random number between 1 and 30 six times
// For each random number generated, check if this number is divisible by 7 or not
// Log out a message to the console if it is divisible by 7 or not




let count = 0
while(count < 6){
    number = Math.floor(Math.random() * (31 - 1)+1)
    if(number % 7 == 0){
        console.log(`${number} is divisible by 7.`)
    } else {
        console.log(`${number} is not divisible by 7.`)
    }
    count++
}

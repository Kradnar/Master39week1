//----Activity 7----

let time = 18

if (time < 7) {
  console.log("I'm sleeping.")
} else if (time >= 7 && time < 8) {
  console.log("I'm commuting.")
} else if (time >= 8 && time < 17) {
  console.log("I'm working.")
} else if (time >= 17 && time <= 24) {
  console.log("I'm commuting.")
} else {
  console.log("I'm at home.")
}


//----Activity 6-----

num = "777717777"

numArray = num.split("")
numArrayReversed = numArray.reverse()
numReversed = numArrayReversed.join("")

if (num == numReversed) {
  console.log("Yep, that's a palindrome.")
} else {
  console.log("None, that's not a palindrome.")
}


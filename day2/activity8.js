//-----Activity 8----

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let strReversed = (str.split("").reverse().join(""))
let vowels = ["a","e", "i", "o", "u"]

for (let i=0; i<str.length; i++) {
  if (vowels.includes(strReversed[i]) == true) {
    console.log(strReversed[i])
    break
  }
}

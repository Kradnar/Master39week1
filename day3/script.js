let wowChars = [
    "Illidan",
    "Thrall",
    "Jaina"
];

console.log(wowChars);

console.log(wowChars[2]);


wowChars[1] = "Arthas"; //---  changes item1
console.log(wowChars);

console.log(wowChars.length);

wowChars.push("Tirande");  //---  adds new line at end
console.log(wowChars);

wowChars.pop();  //removes LAST item
console.log(wowChars);

wowChars[6] = "Slyvanas";  //---  adds a new item at number stated,  if high up will create blank entries
console.log(wowChars);
console.log(wowChars.length);

wowChars.pop();
console.log(wowChars);
console.log(wowChars.length);



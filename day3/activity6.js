// Activity 6
// Imagine your a programmer for a social media platform. You have been tasked with building a prototype for a mutual followers program
// Create 2 arrays of follows eg.BobsFollowers and HannasFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that in BOTH arrays.
// Use a nested loop iterate over both arrays and console.log out the matching follower


bobsFollowers = [
    "Gene",
    "Tina",
    "Louise",
    "Linda"
]
hannahsFollowers = [
    "Linda", 
    "Frank",
    "Dave",
    "Tina"
]

for(bf = 0; bf < bobsFollowers.length; bf++){
    let subject = bobsFollowers[bf]
    for(hf = 0; hf < hannahsFollowers.length; hf++){
        if(subject == hannahsFollowers[hf]){
            console.log(`${subject} follows both Bob and Hannah.`)
        }
    }
}


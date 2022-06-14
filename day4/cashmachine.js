function cash_machine() //! overall function
    let attempts = 0
//?-----------------------------------------------------------------
    function pinFunc() // function 1 - takes a pin input and checks if it is correct
        let pin = 1234
        if (pin = 1234) {
            console.log("Pin accepted")
            balanceFunc() //! correct - next function
        } else {
            console.log("Incorrect pin!")
            attempts++
            if (attempts  >= 3) {
                console.log("We have seized your card for security purposes...\nHave a nice day.")
            } else {
                pinFunc() //! incorrect - return to start of function
            }
        }
//?---------------------------------------------------------------
    function balanceFunc() // function 2 - 
        let balance = 5000
        let withdrawal = 1000
        if (withdrawal <= balance) {
            console.log("Accessing account...")
            withdrawFunc() //! correct - next function
        } else {
            console.log("Insufficient funds!")
            balanceFunc() //! incorrect - return to start of function
        }
//?----------------------------------------------------------------
    function withdrawFunc() // function 3
        let newBalance = balance - withdrawal;
        console.log(`Please take your money and don't forget your card.\nYour remaining balance is ${newBalance}`)
//?-------------------------------------------------------
    pinFunc()
//?-------------------------------------------------------
cashMachine()

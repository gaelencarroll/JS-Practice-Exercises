function createAccount(pin, amount = 0) {
    return{
        changePin(oldPin,newPin){
            if(pin !== oldPin){
                return ('Invalid PIN.')
            }
            pin = newPin
            return('PIN changed.')
        },
        checkBal(inputPin){
            if(inputPin !== pin){
                return('Invalid PIN')
            }
            return(`$${amount}`)
        },
        deposit(inputPin, depositAmt){
            if(inputPin !== pin){
                return('Invalid PIN')
            }
            amount += depositAmt
            return(`Deposited $${depositAmt}. Account balance is $${amount}`)
        },
        withdrawl(inputPin, withdrawlAmt){
            if(inputPin !== pin){
                return('Invalid PIN')
            }
            if(amount < withdrawlAmt){
                return(`Error: cannot withdrawl more than balance. Account balance is $${amount}`)
            }
            amount -= depositAmt
            return(`Withdrew $${withdrawlAmt}. Account balance is $${amount}`)
        },
    }
}

module.exports = { createAccount };

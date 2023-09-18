function guessingGame() {
    const ans = Math.floor(Math.random() * 100)
    let guesses = 0
    let endGame = false

    return function makeGuess(num){
        if(endGame == true){
            return 'The game is over.'
        }
        guesses++;
        if(num === ans){
            endGame=true;
            let guess = guesses === 1 ? 'guess' : 'guesses'
            return `You win! You found ${num} in ${guesses} ${guess}`
        }
        if(num > ans){
            return `Guess is too high`
        }
        if(num < ans){
            return `Guess is too low`
        }
    }

}

module.exports = { guessingGame };

let randomNumber = parseInt(Math.random() * 100 + 1);
// It generates a random number between 1 and 100

const submit = document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); 

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1

let playGame = true

if(playGame){ // game is running
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // This function checks if the user's guess is valid
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if(guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100");
    } else {
        prevGuess.push(guess);
        if(numGuess >= 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // This function checks the user's guess against the random number
    if(guess === randomNumber){
        displayMessage("You Guessed It Right!")
        endGame()
    }else if(guess < randomNumber){
        displayMessage("Your Guess is Low")
    }else if(guess > randomNumber){
        displayMessage("Your Guess is High")
    }
}

function displayGuess(guess) {
    // This function displays the user's previous guesses
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;

    remaining.innerHTML = `${11 - numGuess}`
}



function displayMessage(message){
    // This function displays messages to the user based on their guess
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // This function ends the game and prompts the user to start a new game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    // This function resets the game to start a new round
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}


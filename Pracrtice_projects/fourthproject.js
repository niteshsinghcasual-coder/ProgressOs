const text = document.getElementById('guessField');
const guesses = document.getElementById('guesses');
const lastresult = document.querySelector('.lastResult');
const lowhi = document.querySelector('.lowhi');
const submit = document.getElementById('subt')
const result = document.querySelector('.result');
const random = parseInt((Math.random() * 100) + 1)
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(text.value)
        validateGuess()
    });
}
function validateGuess(guess) {
    if(isNaN(guess))
    {
        alert('please enter  a valid number')
    } else if(guess < 1 ){
        alert('please enter a number greater than 1')
    } else if(guess > 100 ){
        alert('please enter a number less than 100')
    } else {
        prevGuess.push(guess)
    }
    if(numGuess === 11){
        displayGame(guess)
        displayMessage('Game Over')
    }

}
function checkGuest(guess){

}
function displayGame(guess){

}
function displayMessage(guess){

}
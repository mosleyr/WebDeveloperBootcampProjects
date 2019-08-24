// Create secret number
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt("Guess a number: "));

// Check guess if guess is correct
if(guess === secretNumber) {
    alert("Your guess was correct!");
}

// Otherwise, check if higher
else if(guess > secretNumber) {
    alert("Too high!");
}

// Otherwise, check if lower
else if(guess < secretNumber) {
    alert("Too low!");
}
randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let guessCount = 0;

for (let i = 0; i < 10; i++) {
  guess = prompt("Guess a Number between 1 and 10.");
  guessCount++;

  if (guess == randomNumber) { // note: double equals
    alert(`You guessed it in ${guessCount} guesses!`);
    break;
  } else if (guess < randomNumber) {
    alert("Your guess was too low, guess again.");
  } else if (guess > randomNumber) {
    alert("Your guess was too high, guess again.");
  }
}

console.log(randomNumber);

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What do you think it is?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess ) 
  document.write('<h1>You guessed the number, ' + randomNumber + '!<h1>');
document.write('It only took you ' + guessCount + ' tries to do it, too! NICE!')
'use strict';

var countPoints = 0;
var guest = prompt ('Hi, What is your name?');
alert('Hello ' + guest + ', Welcome to my website. Let\'s see how well you know me.');

var questions = ['Do I like The Lord of the Rings?', 'Am I from the US?', 'Do I live in West Seattle?', 'Is Summer my favorite season?', 'Am I a brunette?'];
var firstGuess = ['You\'re right, that\'s my favorite movie', 'You\'re wrong, I am from France.', 'Good guess, I live in West Seattle.', 'So true, I love sun and heat.','You\'re right, I am a brunette.'];
var secondGuess =['Too bad, that\'s actually my favorite movie', 'True, I grew up in France.', 'Wrong, I live in West Seattle.','Wrong guess, I love summer.', 'Too bad, I\'m actually a brunette.'];
var yesNo = 'Please answer with a yes or a no';

function question(){
  for(var i = 0;i < questions.length; i++){
    var userInput = prompt(questions[i]);
    if(i === 1){
      if(userInput.toLowerCase() === 'yes' || userInput.toLowerCase() === 'y'){
        alert(firstGuess[i]);
      } else if(userInput.toLowerCase() === 'no' || userInput.toLowerCase() === 'n'){
        alert(secondGuess[i]);
        countPoints++;
      } else {
        alert(yesNo);
      }
    }else {
      if(userInput.toLowerCase() === 'yes' || userInput.toLowerCase() === 'y'){
        alert(firstGuess[i]);
        countPoints++;
      } else if(userInput.toLowerCase() === 'no' || userInput.toLowerCase() === 'n'){
        alert(secondGuess[i]);
      } else {
        alert(yesNo);
      }
    }
  }

}

// question 6
function questionSix(){
  var correctAnswer = 16;

  for(var i = 0; i < 4; i++){
    if(i === 3){
      alert('Last chance!');
    }
    var numberGuess = prompt ('Let\'s play a game! Can you guess how many air plants I have? (between 0 and 20)');
    numberGuess = parseInt(numberGuess);
    if(numberGuess === correctAnswer){
      alert('Good guess! You\'re awesome.');
      countPoints++;
      break;
    } else if(numberGuess > correctAnswer){
      alert('Too high, try again!');
    } else if(numberGuess < correctAnswer){
      alert('Too low, try again!');
    }
  }
  if(i === 4){
    alert('Wrong guess, I have 16 airplants.');
  }
}
// Question 7
function questionSeven(){
  var correctGuess = ['spain', 'portugal', 'greece', 'italy', 'sweden', 'norway', 'uk'];

  for(var index = 0; index < 6; index++){
    var countryVisited = prompt('Can you guess one European country I visited?');
    if( index === 5){
      alert('You\'re out of guesses!');
    } else if(correctGuess.includes(countryVisited.toLowerCase())){
      alert('Awesome Guess!');
      countPoints++;
      break;
    } else {
      alert('Try again');
    }
  }
  alert('I visited ' + correctGuess + ' and Greece was definitely my favorite.');
}
// How much did the user score?
function score(){
  alert('You guessed ' + countPoints + ' questions right out of 7! Thanks for playing with me ' + guest + '.');
}
// Welcome message to user
function welcome(){
  alert('Hope you will enjoy my biography, have a great day ' + guest + '!');
}
question();
questionSix();
questionSeven();
score();
welcome();

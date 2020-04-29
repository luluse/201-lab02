'use strict';

// var countPoints = 0;

// question 1
var lordOfTheRings = prompt ('Do I like The Lord of the Rings?');
// console.log('You answered ' + lordOfTheRings + ' when I asked you if I liked The Lord of the Ring');

if(lordOfTheRings.toLowerCase() === 'yes' || lordOfTheRings.toLowerCase() === 'y'){
  alert('You\'re right, that\'s my favorite movie');
  // countPoints++;
} else if(lordOfTheRings.toLowerCase() === 'no' || lordOfTheRings.toLowerCase() === 'n'){
  alert('Too bad, that\'s actually my favorite movie');
} else {
  alert('Please answer with a yes or a no');
}

// question 2
var whereImFrom = prompt ('Am I from the US?');
// console.log('You answered ' + whereImFrom + ' when I asked you if I am from the US');

if(whereImFrom.toLowerCase() === 'yes' || whereImFrom.toLowerCase() === 'y'){
  alert('You\'re wrong, I am from France.');
} else if(whereImFrom.toLowerCase() === 'no' || whereImFrom.toLowerCase() === 'n'){
  alert('True, I grew up in France.');
} else {
  alert('Please answer with a yes or a no.');
}

// question 3
var westSeattle = prompt ('Do I live in West Seattle?');
// console.log('You answered ' + westSeattle + ' when I asked you if I live in West Seattle');

if(westSeattle.toLowerCase() === 'yes' || westSeattle.toLowerCase() === 'y'){
  alert('Good guess, I live in West Seattle.');
} else if(westSeattle.toLowerCase() === 'no' || westSeattle.toLowerCase() === 'n'){
  alert('Wrong, I live in West Seattle.');
} else {
  alert('Please answer with a yes or a no.');
}

// question 4
var favoriteSeason = prompt ('Is Summer my favorite season?');
// console.log('You answered ' + favoriteSeason + ' when I asked you if summer was my favorite');

if(favoriteSeason.toLowerCase() === 'yes' || favoriteSeason.toLowerCase() === 'y'){
  alert('So true, I love sun and heat.');
} else if(favoriteSeason.toLowerCase() === 'no' || favoriteSeason.toLowerCase() === 'n'){
  alert('Wrong guess, I love summer.');
} else {
  alert('Please answer with a yes or a no.');
}

// question 5
var brunette = prompt ('Am I a brunette?');
// console.log('You answered ' + brunette + ' when I asked you if I was a brunette');

if(brunette.toLowerCase() === 'yes' || brunette.toLowerCase() === 'y'){
  alert('You\'re right, I am a brunette.');
} else if(brunette.toLowerCase() === 'no' || brunette.toLowerCase() === 'n'){
  alert('Too bad, I\'m actually a brunette.');
} else {
  alert('Please answer with a yes or a no.');
}

// question 6
var correctAnswer = 16;

for(var i = 0; i < 4; i++){
  if(i === 3){
    alert('Last chance!');
  }
  var numberGuess = prompt ('Let\'s play a game! Can you guess how many air plants I have?');
  numberGuess = parseInt(numberGuess);
  if(numberGuess === correctAnswer){
    alert('Good guess! You\'re awesome');
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

// Welcome message to user
var guest = prompt ('What is your name?');
alert('Hello ' + guest + ', Welcome to my website.');
alert('Hope you will enjoy my biography, have a great day ' + guest + '!');

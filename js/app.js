'use strict';

var lordOfTheRings = prompt ('Do I like The Lord of the Rings?');
// console.log('You anwered ' + lordOfTheRings + ' when I asked you if I liked The Lord of the Ring');

if(lordOfTheRings.toLowerCase() === 'yes' || lordOfTheRings.toLowerCase() === 'y'){
  alert('You\'re right, that\'s my favorite movie');
} else if(lordOfTheRings.toLowerCase() === 'no' || lordOfTheRings.toLowerCase() === 'n'){
  alert('Too bad, that\'s actually my favorite movie');
} else {
  alert('Please answer with a yes or a no');
}

var whereImFrom = prompt ('Am I from the US?');
// console.log('You anwered ' + whereImFrom + ' when I asked you if I am from the US');

if(whereImFrom.toLowerCase() === 'yes' || whereImFrom.toLowerCase() === 'y'){
  alert('You\'re wrong, I am from France.');
} else if(whereImFrom.toLowerCase() === 'no' || whereImFrom.toLowerCase() === 'n'){
  alert('True, I grew up in France.');
} else {
  alert('Please answer with a yes or a no.');
}

var westSeattle = prompt ('Do I live in West Seattle?');
// console.log('You anwered ' + westSeattle + ' when I asked you if I live in West Seattle');

if(westSeattle.toLowerCase() === 'yes' || westSeattle.toLowerCase() === 'y'){
  alert('Good guess, I live in West Seattle.');
} else if(westSeattle.toLowerCase() === 'no' || westSeattle.toLowerCase() === 'n'){
  alert('Wrong, I live in West Seattle.');
} else {
  alert('Please answer with a yes or a no.');
}

var favoriteSeason = prompt ('Is Summer my favorite season?');
// console.log('You anwered ' + favoriteSeason + ' when I asked you if summer was my favorite');

if(favoriteSeason.toLowerCase() === 'yes' || favoriteSeason.toLowerCase() === 'y'){
  alert('So true, I love sun and heat.');
} else if(favoriteSeason.toLowerCase() === 'no' || favoriteSeason.toLowerCase() === 'n'){
  alert('Wrong guess, I love summer.');
} else {
  alert('Please answer with a yes or a no.');
}

var brunette = prompt ('Am I a brunette?');
// console.log('You anwered ' + brunette + ' when I asked you if I was a brunette');

if(brunette.toLowerCase() === 'yes' || brunette.toLowerCase() === 'y'){
  alert('You\'re right, I am a brunette.');
} else if(brunette.toLowerCase() === 'no' || brunette.toLowerCase() === 'n'){
  alert('Too bad, I\'m actually a brunette.');
} else {
  alert('Please answer with a yes or a no.');
}


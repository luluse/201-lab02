'use strict';

var lordOfTheRings = prompt ('Do I like lords of the rings?');

if(lordOfTheRings.toLowerCase() === 'yes' || lordOfTheRings.toLowerCase() === 'y'){
  alert('You\'re right, that\'s my favorite movie');
} else if(lordOfTheRings.toLowerCase() === 'no' || lordOfTheRings.toLowerCase() === 'n'){
  alert('Too bad, that\'s actually my favorite movie');
} else {
  alert('Please answer with a yes or a no');
}

var whereImFrom = prompt ('Am I from the US?');

if(whereImFrom.toLowerCase() === 'yes' || whereImFrom.toLowerCase() === 'y'){
  alert('You\'re wrong, I am from France.');
} else if(whereImFrom.toLowerCase() === 'no' || whereImFrom.toLowerCase() === 'n'){
  alert('True, I grew up in France.');
} else {
  alert('Please answer with a yes or a no.');
}

var westSeattle = prompt ('Do I live in West Seattle?');

if(westSeattle.toLowerCase() === 'yes' || westSeattle.toLowerCase() === 'y'){
  alert('Good guess, I live in West Seattle.');
} else if(westSeattle.toLowerCase() === 'no' || westSeattle.toLowerCase() === 'n'){
  alert('Wrong, I live in West Seattle.');
} else {
  alert('Please answer with a yes or a no.');
}

var favoriteSeason = prompt ('Is Summer my favorite season?');

if(favoriteSeason.toLowerCase() === 'yes' || favoriteSeason.toLowerCase() === 'y'){
  alert('So true, I love sun and heat.');
} else if(favoriteSeason.toLowerCase() === 'no' || favoriteSeason.toLowerCase() === 'n'){
  alert('Wrong guess, I love summer.');
} else {
  alert('Please answer with a yes or a no.');
}

var brunette = prompt ('Am I a brunette?');

if(brunette.toLowerCase() === 'yes' || brunette.toLowerCase() === 'y'){
  alert('You\'re right, I am a brunette.');
} else if(brunette.toLowerCase() === 'no' || brunette.toLowerCase() === 'n'){
  alert('Too bad, I\'m actually a brunette.');
} else {
  alert('Please answer with a yes or a no.');
}


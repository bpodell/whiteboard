'use strict';

function scrabble(sentence) {
  var words = sentence.split(' ');
  var highestWord;
  var highestScore = 0;
  for (var i = 0; i < words.length; i++ ){
    var total = 0;
    for(var j = 0; j < words[i].length; j++) {
      total += words[i].charCodeAt(j);
      console.log(highestScore);
      if (total > highestScore) {
        highestWord = words[i];
        highestScore = total;
      }
    }
  }
  return highestWord;
}
var kappa = 'zuf bc def ghij';
scrabble(kappa);
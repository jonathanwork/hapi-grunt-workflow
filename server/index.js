'use strict';

//this function simple add two digits
module.exports.add = function (digit_1, digit_2) {
  return digit_1 + digit_2;
};

//just returns the first word of a string
module.exports.stringUtil = {
  firstWord: function firstWord(text) {
    var firstWrd = text.split(' ');
    return firstWrd[0];
  }
};

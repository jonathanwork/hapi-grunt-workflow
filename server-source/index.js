//this function simple add two digits
module.add = (digit_1, digit_2) => {
  return digit_1 + digit_2;
}

//just returns the first word of a string
module.stringUtil = {
  firstWord(text) {
    var firstWrd = text.split(' ');
    return firstWrd[0];
  }
}

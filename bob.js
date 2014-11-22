//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
  var output = '';
  var whatever = 'Whatever.';
  var whoa = 'Whoa, chill out!';
  var sure = 'Sure.';

  switch (input) {
    case "Tom-ay-to, tom-aaaah-to.":
    output = whatever;
    break;
    case 'WATCH OUT!':
    output = whoa;
    break;
    case 'Does this cryogenic chamber make me look fat?':
    output = sure;
    break;
  }
  return output;
//
};

module.exports = Bob;

//
// 
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
  var output = '';
  var whatever = 'Whatever.';
  var whoa = 'Whoa, chill out!';
  var sure = 'Sure.';
  var input = input;
  var success = true;
  var testArray = [];



  function statingSomething(input) {
    var match = false;
    // if this matches set true
    match = /^[A-Z]{1}[a-z\s\,\.\-]+\.$/.test(input);
    if (!match) {
      return match;
    } else {
      return whatever;
    }
  }

  function shouting(input) {
    // Do something
  }

  testArray = [statingSomething, shouting];

  for (var i = 0; i < testArray.length; i++) {
    success = testArray[i](input)
    output = success;
    if (success != false) {
      break
    }
  };
  console.log(output);
  
  return output;
//
};

module.exports = Bob;

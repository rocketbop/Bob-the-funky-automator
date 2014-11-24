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


  // Individual functions for each type of input
  function statingSomething(input) {
    var match = false;

    match = /^[A-Z]{1}[a-z\s\,\.\-]+\.$/.test(input);
    if (!match) {
      return match;
    } else {
      return whatever;
    }
  }

  function shouting(input) {
    var match = false;

    match = /^[A-Z]{1}[A-Z\s\,\.\-]+\!$/.test(input);
    if (!match) {
      return match;
    } else {
      return whoa;
    }
  }

    function askingAQuestion(input) {
    var match = false;

    match = /^[A-Z]{1}[a-zA-Z\s\,\.\-]*[a-z\s\,\.\-]+\?$/.test(input);
    if (!match) {
      return match;
    } else {
      return sure;
    }
  }

  testArray = [statingSomething, shouting, askingAQuestion];

  // run each program with the input until one succeeds, before outputting the relevant response
  for (var i = 0; i < testArray.length; i++) {
    success = testArray[i](input)
    output = success;
    if (success != false) {
      break
    }
  };

  return output;
//
};

module.exports = Bob;

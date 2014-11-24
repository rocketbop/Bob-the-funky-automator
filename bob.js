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
    var response = whatever;
    var match = /^[A-Z]{1}[a-z\s\,\.\-]+\.$/.test(input);

    return !match ? match : response;
  }

  function shouting(input) {
    var response = whoa;
    var match = /^[A-Z]{1}[A-Z\s\,\.\-]+\!$/.test(input);

    return !match ? match : response;
  }

    function askingAQuestion(input) {
    var response = sure;
    var match = /^[A-Z]{1}[a-zA-Z\s\,\.\-]*[a-z\s\,\.\-]+\?$/.test(input);

    return !match ? match : response;
  }

  functionArray = [statingSomething, shouting, askingAQuestion];

  // run each program with the input until one succeeds, before outputting the relevant response
  for (var i = 0; i < functionArray.length; i++) {
    success = functionArray[i](input)
    output = success;
    if (success != false) {
      break
    }
  };

  return output;
//
};

module.exports = Bob;

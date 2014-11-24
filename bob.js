var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// INIT VARIABLES
  var output = '';
  var whatever = 'Whatever.';
  var whoa = 'Whoa, chill out!';
  var sure = 'Sure.';
  var input = input;
  var success = true;
  var testArray = [];

// APP
//
  // Each function is the same, but for the response, and the regex
  // If the regex matches the input, the function's response is returned, otherwise false is returned
  // and the for loop moves on to the next function in the functions array

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
    var match = /^[A-Z]{1}[a-zA-Z\s\,\.\-]*[a-z\s\,\.\-]+[a-zA-Z\s\,\.\-]*\?$/.test(input);

    return !match ? match : response;
  }

  function talkingForcefully(input) {
    var response = whatever;
    var match = /^[A-Z]{1}[a-zA-Z\s\,\.\-]*[a-z\s\,\.\-\']+[a-zA-Z\s\,\.\-]*\!$/.test(input);

    return !match ? match : response;
  }

  functionArray = [statingSomething, shouting, askingAQuestion, talkingForcefully];

  // RUN EACH PROGRAM WITH THE INPUT UNTIL ONE SUCCEEDS, BEFORE OUTPUTTING THE RELEVANT RESPONSE

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

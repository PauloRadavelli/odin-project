const reverseString = function(input) {
  const splitString  = input.split("");
  const reverseArray = splitString.reverse();
  const joinArray    = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(string,num) {
  let stringTwo = string;
  for(i = 0; i<num-1; i++){
    string += stringTwo;
  }
  if(num == 0){
      return "";
  }
  if(num < 0){
      return "ERROR";
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;

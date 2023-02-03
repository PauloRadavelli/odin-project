const sumAll = function(firstNumber, lastNumber) {
  let sum = 0;
    if(typeof firstNumber != "number" || typeof lastNumber != "number"){
    return "ERROR";
  }
  if(lastNumber < 0 || firstNumber <0){
    return "ERROR";
  }
  if(lastNumber > firstNumber){
    for(let i = 0 ; i< lastNumber; i++){
      sum += i
    }
    return sum += lastNumber
  }
  else{
    for(let i = 0; i<firstNumber; i++){
      sum += i
    }
    return sum += firstNumber;
  }
};

// Do not edit below this line
module.exports = sumAll;

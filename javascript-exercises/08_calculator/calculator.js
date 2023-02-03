const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length ; i++){
    sum += array[i]
  }
  return sum
};

const multiply = function(a) {
  let sum = a[0];
  for(let i = 0 ; i<a.length-1; i++){
    sum = sum*a[i+1]
  }
  return sum;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  if(a == 0){
    return 1;
  }
	for(let i = a-1; i > 0;i--){
    a = a*i
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

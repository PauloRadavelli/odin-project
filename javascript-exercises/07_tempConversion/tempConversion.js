const convertToCelsius = function(fahrenheit) {
  fahrenheit = (fahrenheit - 32)*0.5556;
  return Math.round(fahrenheit * 10)/10;
};

const convertToFahrenheit = function(celcius) {
  celcius = (celcius*1.8)+32;
  return Math.round(celcius * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

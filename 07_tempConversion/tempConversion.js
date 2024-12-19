const convertToCelsius = function(numberInFahrenheit) {
  return Math.round(((numberInFahrenheit - 32) * (5 / 9)) * 10) / 10;
};

const convertToFahrenheit = function(numberInCelsius) {
  return Math.round(((numberInCelsius * (9 / 5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

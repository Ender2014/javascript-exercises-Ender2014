const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product * num);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
  let finalNum = 1;
	for(let i = 1; i < num + 1; i++){
    finalNum *= i;
  }
  return finalNum;
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

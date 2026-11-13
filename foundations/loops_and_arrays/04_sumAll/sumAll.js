const sumAll = function (min, max) {
  if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max))
    return "ERROR";
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }
  let sum;
  for (sum = 0; min <= max; min++) sum = sum + min;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function (arr, ...strings) {
  for (const string of strings) {
    arr = arr.filter((item) => item !== string);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

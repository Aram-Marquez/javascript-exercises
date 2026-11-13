const repeatString = function (str, num) {
  let result = "";
  switch (num >= 0) {
    case true:
      for (i = 0; num > i; i++) result += str;
      break;
    case false:
      result = "ERROR";
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

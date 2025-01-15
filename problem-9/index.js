let isPalidrome = function (n) {
  let result = n.toString().split("").reverse().join("");
  if (result == n) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalidrome(121));

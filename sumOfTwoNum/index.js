function add(param1, param2) {
  return param1 + param2;
}

console.log(add(1, 2));

function totalSum(...EachSum) {
  let total = 0;
  EachSum.forEach((item) => {
    total += item;
  });
  console.log(total);
}
totalSum(1, 2, 3);

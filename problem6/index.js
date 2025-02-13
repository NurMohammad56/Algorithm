function primeSum(num) {
  let primeTotal = 0;

  for (let i = 2; i < num; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeTotal += i;
    }
  }
  return primeTotal;
}

console.log(primeSum(10));

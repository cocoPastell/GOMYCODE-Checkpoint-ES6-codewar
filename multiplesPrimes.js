function findThem(numberLimit, primes) {
  let result = 0;

  for (let i = 1; i < numberLimit; i++) {
    for (let j = 0; j < primes.length; j++) {
      if (primes[j] > numberLimit) {
        return 0;
      } else if (i % primes[j] === 0) {
        result += i;
      }
    }
  }

  return result;
}

function fibsFizzBuzz(n) {
  if (n == 1) {
    return [1];
  } else {
    let fibs = [1, 1];
    for (let i = 2; i < n; i++) {
      fibs.push(fibs[i - 1] + fibs[i - 2]);
    }
    return fibs.map((num) => {
      if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num;
      }
    });
  }
}

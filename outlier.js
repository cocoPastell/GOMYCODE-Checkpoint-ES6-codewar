function findOutlier(integers) {
  const odds = integers.filter((num) => Math.abs(num) % 2 === 1);
  const even = integers.filter((num) => Math.abs(num) % 2 === 0);
  //This code applies the Math.abs() method to each number before applying the modulus operator, which ensures that the result of the modulus operation is always positive and correct regardless of the sign of the input number.
  if (odds.length == 1) {
    return odds[0];
  }
  if (even.length == 1) {
    return even[0];
  }
}

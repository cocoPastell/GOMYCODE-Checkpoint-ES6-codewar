const removNb = (n) => {
  const sum = (n * (n + 1)) / 2;
  const result = [];

  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      result.push([a, b]);
    }
  }

  return result;
};

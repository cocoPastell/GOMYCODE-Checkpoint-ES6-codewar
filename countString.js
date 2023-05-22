function count(string) {
  let counts = {};
  for (let char of string) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }
  return counts;
}

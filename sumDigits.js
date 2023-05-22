function digitalRoot(n) {
  let stringNumber = n.toString();
  let result = 0;
  for (let i = 0; i < stringNumber.length; i++) {
    result += parseInt(stringNumber[i]);
  }
  if (result > 9) {
    result = digitalRoot(result);
  }
  return result;
}

function isOddHeavy(n) {
  let even = [];
  let odd = [];

  if (n.length == 0) {
    return false;
  }
  if (n.length == 1 && n[0] % 2 !== 0) {
    return true;
  }
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      even.push(n[i]);
    } else {
      odd.push(n[i]);
    }
  }

  if (odd.length === 0) {
    return false;
  }

  let maxOdd = Math.max(...odd);
  let maxEven = Math.max(...even);

  let test = false;
  for (let i = 0; i < odd.length; i++) {
    if (odd[i] < maxEven) {
      test = true;
    }
  }

  if (test == true) {
    return false;
  }

  if (maxOdd > maxEven && test == false) {
    return true;
  }
}

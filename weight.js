function orderWeight(strng) {
  let newArr = strng.split(" ");

  xweight = 0;
  yweight = 0;

  for (let x = 0; x < newArr.length - 1; x++) {
    let y = x + 1;
    for (let j = 0; j < newArr[x].length; j++) {
      xweight += parseInt(newArr[x][j]);
    }
    for (let k = 0; k < newArr[y].length; k++) {
      yweight += parseInt(newArr[y][k]);
    }

    if (xweight > yweight) {
      let a = 0;
      a = newArr[x];
      newArr[x] = newArr[y];
      newArr[y] = a;
    }
    xweight = 0;
    yweight = 0;
  }
  let newString = newArr.toString();
  newString = newString.replaceAll(",", " ");
  return newString;
}

function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  } else {
    let arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let strNew = arr.join(" ");
    let character = "#";
    let strFinal = character.concat(strNew.replaceAll(" ", ""));

    return strFinal.length > 140 ? false : strFinal;
  }
}

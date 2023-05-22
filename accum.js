function accum(s) {
  let result = " ";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
  }
  return result.slice(0, -1);
}

//In this case, result.slice(0, -1) is used to remove the last character (which is a dash) from the resulting string before returning it. The first argument 0 is the starting index, which indicates the position in the string to start the extraction. The second argument -1 is the ending index, which indicates the position in the string to stop the extraction. When the ending index is negative, it counts from the end of the string. Therefore, -1 specifies the position of the last character in the string.

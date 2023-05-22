function spinWords(string) {
  const arr = string.split(" ");
  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      newString += arr[i].split("").reverse().join("");
    } else {
      newString += arr[i];
    }
    if (i < arr.length - 1) {
      newString += " ";
    }
  }
  return newString;
}
//This code splits the input string into an array of words using the split() method, and then iterates over each word in the array using a for loop. If the length of the word is greater than or equal to 5, it reverses the word using the split(), reverse(), and join() methods, and appends it to the newString variable. Otherwise, it simply appends the original word to newString. Finally, the code adds a space between words except for the last one.

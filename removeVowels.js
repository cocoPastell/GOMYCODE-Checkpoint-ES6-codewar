function disemvowel(str) {
  const noVowels = str.replace(/[aeiou]/gi, "");
  return noVowels;
}
//To remove all vowels from a string in JavaScript, call the replace() method on the string with this regular expression: /[aeiou]/gi, i.e., str.replace(/[aeiou]/gi, ''). replace() will return a new string where all the vowels in the original string have been replaced with an empty string.

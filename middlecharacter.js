function getMiddle(s) {
  x = s.length / 2;
  if (s.length % 2 != 0) {
    return s.charAt(x);
    //The charAt in JavaScript is used to find the character at the specified index value of the String.
  } else {
    return s.slice(x - 1, x + 1);
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array.
  }
}

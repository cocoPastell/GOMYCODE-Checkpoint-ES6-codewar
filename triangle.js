function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
//All you have to do is use the Triangle Inequality Theorem, which states that the sum of two side lengths of a triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.

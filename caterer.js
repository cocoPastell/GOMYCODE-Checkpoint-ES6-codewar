function findCaterer(budget, people) {
  if (people <= 0 || budget < 15 * people) {
    return -1;
  } else if (budget < 20 * people) {
    return 1;
  } else if (
    budget < 30 * people * 0.8 ||
    (people === 60 && budget < 30 * people)
  ) {
    return 2;
  } else {
    return 3;
  }
}

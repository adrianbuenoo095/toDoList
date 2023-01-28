function solution(number) {
  let arrayOfMultiplesOfThreeFive = [];
  let sumOfAllNumbersThreeAndFive;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrayOfMultiplesOfThreeFive.push(i);
    }
  }

  sumOfAllNumbersThreeAndFive = arrayOfMultiplesOfThreeFive.reduce(
    (preValue, currentValye) => preValue + currentValye,
    0
  );

  return sumOfAllNumbersThreeAndFive;
}

function isNumberNegative(number) {
  if (number > 0) return 0;
}
 
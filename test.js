// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript/

function solution(number) {
  let sum = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      isNumberNegative(i)
      sum.join(i)
    }
  }

  let sumTest = sum.reduce((preValue, currentValye) => preValue + currentValye);
  return sumTest;

}

function isNumberNegative(number) {
  if (number > 0) return 0;
}


let test = solution(10);
console.log(test);

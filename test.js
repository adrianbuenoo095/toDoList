// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript/

function solution(number) {
  let sum = [];
  for (let i = 0; i < number; i++) {
    console.log(`hello this is number ${i}`);
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(` This is the second number${i}`);
      sum.join(i);
    }
  }
}

let test = solution(10);
console.log(test);

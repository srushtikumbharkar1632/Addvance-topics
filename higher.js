// function calculate(operation, initialValue, numbers) {
//     let total = initialValue;
//     for (const number of numbers) {
//       total = operation(total, number);
//     }
//     return total;
//   }
//   function sum(n1, n2) {
//     return n1 + n2;
//   }
//   function multiply(n1, n2) {
//     return n1 * n2;
//   }
// console.log(calculate(sum, 0, [1, 2, 4]));      // => 7
// console.log(calculate(multiply, 1, [1, 2, 4])); // => 8

// let x = 2;

// const add = (y) => {
//   x += y;
// };

// add(4);



// function divisibleSumPairs(n, k, ar) {
//   // Write your code here
//   let result = 0;
//   for(let i = 0; i < n - 1; i++) {
//     result += ar.slice(i + 1, n).filter((item, index) => {
//       if ((item + ar[i]) % k === 0) {
//           return item;
//     }
//   }).length;
// }
// return result;
// }
// console.log(divisibleSumPairs(6,3,[1,2,3,4,5,6]))


function birthdayCakeCandles(candles){
  let max=0
  let counter =0
  candles.forEach(element => {
    if (element >max){
      max=element;
      counter=1
    }
    
  });
}
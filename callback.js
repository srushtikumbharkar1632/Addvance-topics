// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
// function processUserInput(callback) {
//     var prompt = require('readline-sync');
//     var num1 = prompt.question('Please enter your name :=');
//     callback(num1);
//   }
  
// processUserInput(greeting);
  



function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}
myFirst();
mySecond();




// let readlineSync = require("readline-sync");
// function timeConversion(s) {
//   // Write your code here
//   const arr = s.slice(0,8).split(':');
//   arr[0] = (s.indexOf('PM') > -1) ?
//   (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
//   (arr[0] == 12 ? '00' : arr[0]);
//   return arr.join(':');
// }
// console.log(timeConversion(readlineSync.question("enter your time in AM/PM format: ")))



// function simpleArraySum(ar) {
//   // Write your code here
// var sum = 0;
// for (var i = 0; i < ar.length; i++) {
//   sum += ar[i];
// }
// return sum;
// }

// console.log(simpleArraySum([1, 2, 3, 4]))



// function miniMaxSum(arr) {
//   let sum = arr.reduce((a, b) => {
//     return a + b;
//   });
//   const min = sum - Math.max(...arr);
//   const max = sum - Math.min(...arr);
//   console.log(min + " " + max);

// }
// miniMaxSum([2,67,14,27,89])



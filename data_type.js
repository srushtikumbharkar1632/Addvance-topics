// function job(){
//     return new Promise(function(resolve,reject){
//         reject()
//     });
// }
// let Promise=job();
// Promise
// .then(function(){
//     console.log("sucess 1")
// })
// .then(function(){
//     console.log("sucess 2")
// }).then(function(){
//     console.log("sucess 3")
// }).catch(function(){
//     console.log("Error 1")
// }).then(function(){
//     console.log("sucess 4")
// })

// function solve(arr,rotations){
//     if (rotations==0)return arr;
//         for (let i=0; i<rotations; i++){
//             let element=arr.pop();
//             arr.unshift(element);
//         }
//     return arr
// }
// console.log(solve([44,1,22,111],5))



// async function f(){
//     let result="first";
//     let Promise= new Promise((resolve,reject)=> {
//         setTimeout(()=>resolve("done"),1000);
//     });
//         result=await Promise;
//         console.log(result)
// }
// f();


// function sumIfvalue (...b){
 
//     return b}
//  console.log(sumIfvalue(2,3,5,6))

 
// const fruits = ["Banana", "Orange", "Apple"];

// fruits instanceof Array;
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
// console.log(fruits)

// let class_name=class{
//     constructor (method1,method2){
//         this.method1=method1;
//         this.method2=method2;
//     }
// }

// class rectangle{
//     constructor (height,width){
//         this.height=height
//         this.width=width
//     }
// }
// console.log(rectangle(34,17))


// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", 2005);
//   console.log("My car is " + myCar.age() + " years old.");
  
// var list = ((num_list)=>{
//     let i = 0
//     do{
//         if(i%2==0){
//             console.log("even",i);
//         }else{
//             console.log("odd",i);
//         }
//         i++;
//     }while(i<num_list.length){
  
//     };
//  });
// list([num]) 

// function myFirst() {
//     console.log("Hello");
//   }
  
//   function mySecond() {
//     console.log("Goodbye");
//   }
  
// myFirst();
// mySecond();
  

// function myDisplayer() {
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
// let result = myCalculator(5, 5);
// myDisplayer(sum);
  
  
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('srushti', callMe);

// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     let readlineSync = require("readline-sync");
//     var name=readlineSync.question("Enter the name: ")

//     callback(name);
//   }
  
//   processUserInput(greeting);


// var num_list = (()=>{
//     var list = [2,4,6,98,7,6,234,6,74,2,457,64];
//     return new Promise((resolve,reject)=>{
//     const even = [];
//     const odd = [];
//     var i = 1;
//     while(i<list.length){
//         if(i%2==0){
//             even.push(i);
//             resolve(even);
//         }else{
//             odd.push(i);
//             reject(odd);
//         }
//         i++;
//     };
//     })
//     .then((message)=>{
//        console.log(message+" even");
//     })
//     .catch((message)=>{
//         console.log(message+" odd");
//     });
// });
// num_list();
  





// var p = Promise.resolve([1,2,3]);
// p.then(function(v) {
//   console.log(v[1]); 
// });                                     ]

// var original=Promise.resolve(33);
// var cast=Promise.resolve(original)
// cast.then(function(value){
//     console.log('value'+value);
// })
// console.log('original===cast?'+(original===cast))


// let promise = new Promise(function(resolve, reject) {
//     resolve("I am done");
// });


// let promise = new Promise(function(resolve, reject) {
//     resolve("I am surely going to get resolved!");
  
//     reject(new Error('Will this be ignored?'));  
//     resolve("Ignored?"); 
//   });
//   promise.then(
//     (result) => { 
//        console.log(result);
//     },
//     (error) => { 
//        console.log(error);
//     }
//   );
 


// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout( function() {
//         resolve("Success!")  // Yay! Everything went well!
//       }, 250)
//     })
    
//     myFirstPromise.then((successMessage) => {
//       console.log("Yay! " + successMessage)
//     });
    
// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('I did something'), 3000)
//     })
//   }
  
//   const doSomething = async () => {
//     console.log(await doSomethingAsync())
//   }
  
// console.log('Before')
// doSomething()
// console.log('After')



// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"
//   }
// f();

// function returnPromises() {
//     var newPromise = new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("Sample Data");
//       }, 3000);
//     });
//   }
  
//   function ExecuteFunction() {
//     var newData = "Mayank";
//     var getPromise = returnPromises();
//     console.log(newData);
//   }
  
//   ExecuteFunction()
  






// async function kitchen(){

//     console.log("A")
//     console.log("B")
//     console.log("C")
    
//     await toppings_choice()
    
//     console.log("D")
//     console.log("E")
  
//   }
  
//   // Trigger the function
  
//   kitchen();
  


// async function kitchen(){
//     try{
// 	await time(2000)
// 	console.log(`${stocks.Fruits[0]} was selected`)

// 	await time(0000)
// 	console.log("production has started")

// 	await time(2000)
// 	console.log("fruit has been chopped")

// 	await time(1000)
// 	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

// 	await time(1000)
// 	console.log("start the machine")

// 	await time(2000)
// 	console.log(`ice cream placed on ${stocks.holder[1]}`)

// 	await time(3000)
// 	console.log(`${stocks.toppings[0]} as toppings`)

// 	await time(2000)
// 	console.log("Serve Ice Cream")
//     }

//     catch(error){
// 	 console.log("customer left")
//     }
// }

// kitchen()


// let is_shop_open = true;

// function time(ms) {

//    return new Promise( (resolve, reject) => {

//       if(is_shop_open){
//          setTimeout(resolve,ms);
//       }

//       else{
//          reject(console.log("Shop is closed"))
//       }
//     });
// }

// var friend1={first_name:'srushti',last_name:'khedekar'};
// var friend2={first_name:'Rushikesh',last_name:'khedekar'};
// function invites(greetings1,greetings2){
//     console.log(greetings1+ ' '+this.first_name+ ' '+this.last_name+', '+greetings2)
// }
// invites.call(friend1,'hey','whatsup?')
// invites.call(friend2,'hey','whatsup?')


// var friend1={first_name:'srushti',last_name:'khedekar'};
// var friend2={first_name:'Rushikesh',last_name:'khedekar'};
// function invites(greetings1,greetings2){
//     console.log(greetings1+ ' '+this.first_name+ ' '+this.last_name+', '+greetings2)
// }
// invites.apply(friend1,['hey','whatsup?'])
// invites.apply(friend2,['hey','whatsup?'])


// var friend1={first_name:'srushti',last_name:'khedekar'};
// var friend2={first_name:'Rushikesh',last_name:'khedekar'};
// function invites(greetings1,greetings2){
//     console.log(greetings1+ ' '+this.first_name+ ' '+this.last_name+', '+greetings2)
// }
// invitesFriend1=invites.bind(friend1)
// invitesFriend2=invites.bind(friend2)
// invitesFriend1('hello','how are you')
// invitesFriend2('hello','how are you')


// let x = 2;

// const add = (y) => {
//   x += y;
// };

// add(4);


// Promise 3 stages
// task
// aap muzo call karo ki 10 am me call karoge
// 10 am
// 1:pending
// event time pe hogaya 10 am - call karo ya nai karoge
//success ya fail
// fulfilled ya to reject 
// 2.resolve -> fulfilled
// 3.reject

// pending
// resolve
// reject


// const pobj= new Promise ((res olve, reject)=>{
//     setTimeout( ()=>{
//         let roll_no=[1,2,3,4,5];
//         resolve(roll_no);
//         reject('Error while communicating')
//     },2000);
// });

// const getBiodata=(indexdata)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout((indexdata)=>{
//             let biodata={
//                 name:'vinod',
//                 age:26
//             }
//             resolve(`My role no is ${indexdata}.My name is ${biodata.name} and I am ${biodata.age} years old.`)

//         },2000,indexdata)
//     })
// }
// // promise consume
// pobj.then((rollno)=>{
//     console.log(rollno)
//     return getBiodata(rollno[1])
// }).then((kuchbhi)=>{
//     console.log(kuchbhi)
// }).catch((error)=>{
//     console.log(error)
// })






// count = false
// fun = new Promise (function(resolve,reject){
//     if (count){
//         resolve("I am succecsful")

//     }
//     else{
//         reject("No successful")
//     }
// })
// fun.then((value)=>{
//     console.log("fulfilled")
// }).catch((error)=>{
//     console.log("not")
// })

// let rain =10
// let animals=0
// while (rain<13|| animals<=2){
//     rain++
//     animals+=2
// }
// console.log(animals)

// let animals=["dog","cat","hen"]
// a[100]=("fox")
// console.log(a.length)\\\


// const person=[1,2,3]
// const arr=[4,5,6]
// console.log([...person,...arr])



// var fs = require('fs');
// fs.open('mynewfile2.txt', 'Hello srushti', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



var x=10;
var  y=8;
console.log( x==y);






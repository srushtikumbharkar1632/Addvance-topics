
// const details = {
//     name:"kritika",
//     age:23,
//     fun:function(){
//         console.log("yes");
//     }
//  };
//  const {name,age,fun} = details
//  console.log(name,age,fun)
//  fun()





// // With array:-
// var a,b
// [a,...b]=[2,4,34,654,234,56]
// console.log(a,b);




//##############
// var [a,...b]=[2,4,34,654,234,56]
// console.log(a,b);



// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [car, truck, suv] = vehicles;
// console.log(vehicles)

// //mustang, f-150',expedition




const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;





// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  


  const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add()
  
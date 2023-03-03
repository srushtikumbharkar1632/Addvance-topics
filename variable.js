// variable decleared with "var" in javascript are function scoped.
// variable decleared with "let & const" are block scoped.

// var name ="supriya"
// name="pihu"
// console.log(name)

// output : pihu


// let name ="supriya"
// name="pihu"
// console.log(name)

// output : pihu

// const name ="supriya"
// name="pihu"
// console.log(name)

// output : Assignment to constant variable.


// var name="pihu"

// function add(love){
//     const name1="rutu"
//     if(love){
//         var name="shrushti"
//         let name1="rutuja"
//         console.log("my name is","\n"+name,"\n"+"and","\n"+name1)
//     }
//     console.log("my name is","\n"+name,"\n"+"and","\n"+name1)

// }
// add(true)
// console.log(name)




// var name="shrushti"
// if(true){
//     var name ="rutu"
//     console.log(name)
// }
// console.log(name)

// obj={
//     a:"srushti",
//     b:"sru"
// }
// printa=function(age,age2){
//     console.log(this.a," ","+",this.b)
// }
// printa.apply(12,34)




var myVar = 100;
var obj = { 
    myVar : 300, 
    
    whoIsThis: function(){
        var myVar = 200;
        console.log(myVar); // 200
        console.log(this.myVar); // 300
    }
};
obj.whoIsThis()
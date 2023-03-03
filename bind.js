var details = {
    name:"kritika",
    age:23,
    hight:5.7,
 };
 printAll = function(secname,seclastname){
    console.log(this.name+" "+this.age+" "+this.hight)
 };
 let details2={
    name:"pooja",
    age:20,
    hight:5
 };
 var data = printAll.bind(details2,"pooja","rani");
 data();
 
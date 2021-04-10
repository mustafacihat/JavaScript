// //Equality
// console.log(1==1);//true
// console.log("1"==1);//true
// console.log(0==false);//true
//
// //Inequality
// console.log(1!=2);//true
// console.log(1!="1");//false
// console.log(1!=true);//false
// console.log(1!=false);//true
//
// //Strict Equality
// console.log(3===3);//true
// console.log(3==="3");//false
//
// //Non-Strict Equality
// console.log(3!=="3");//true
// console.log(4!==4);//false
// console.log(4!==5);//true
//
//
// //Greater than
// console.log(4>3);//true
// console.log(4<3);//false
//
// //Greater than or Equal
// console.log(4>=3);//true
// console.log(4<=3);//false
//
// //Less than
// console.log(4<3);//false
// console.log(3<4);//true
//
// //Less than or Equal
// console.log(3<=4);//true
// console.log(4<=4);//true

var num1 = prompt("Enter the value of num1");
var num2 = prompt("Enter the value of num2");

num1 = parseInt(num1);
num2 = parseInt(num2);

var bool = num1>num2;

console.log("First number " + num1 + " is greater than Second number " + num2 + " - " + bool);

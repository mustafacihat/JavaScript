//Operator: x+y

//Number + Number = Addition
console.log(2 + 2);
console.log(20 + 200);

//Boolean + Number = Addition
console.log(false + 1);//1
console.log(true + 1);//2

//Number + String = Concatenation
console.log(5 + "Hello");

//String + Boolean = Concatenation
console.log("hello" + false);

//String + String = Concatenation
console.log("hello " + "world");

//Operator: x-y
console.log(5 - 3);
console.log(10 - 20);
console.log(-10 - 10);

//Operator: x*y
console.log(10*10);
console.log(20*-10);

//Operator: x/y
console.log(10/10);
console.log(20/10);
console.log(10*10);
console.log(20/0);
console.log(0/20);

//Operator: x%y
console.log(5%3);
console.log(6%3);

//Operator: x++ or ++x
var x = 3;
y=x++;
console.log(x);
console.log(y);



var num1= 46;
var num2= 90;
var sum = num1+num2;
console.log("sum = " + sum);

num1 = prompt("enter the value of num1");
num2= prompt("enter the value of num2");

num1 = parseInt(num1);
num2 = parseInt(num2);

sum= num1+num2;
console.log("sum = " + sum);

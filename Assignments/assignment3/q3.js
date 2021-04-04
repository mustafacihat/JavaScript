var num1 = prompt("enter the first number");
var num2 = prompt("enter the second number");

var operator = prompt("what is the operator");

if (num1 === "" || num2 === "") {
  console.log("Please enter valid numbers");
}else {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator === "+") {
    console.log(num1+num2);
  }else if (operator === "-") {
    console.log(num1-num2);
  }else if (operator === "*") {
    console.log(num1*num2);
  }else if (operator === "/") {
    console.log(num1/num2);
  }else {
    console.log("check the operator");
  }
}

var num1 = parseInt(prompt("write the first number"));

var num2 = parseInt(prompt("write the second number"));

var num3 = parseInt(prompt("write the third number"));


if (num1 > num2 && num1 > num3) {
  console.log("the greatest number is: " + num1);
}else if (num2 > num1 && num2 > num3) {
  console.log("the greatest number is: " + num2);
}else {
  console.log("the greatest number is: " + num3);
}


// I am checking 2 numbers are equals or // NOTE:
if (num1 == num2) {
  console.log("Numbers are equal");
}else {
  console.log("Numbers are not equal");
}

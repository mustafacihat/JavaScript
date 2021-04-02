var name = prompt("Enter your name");

var currentYear = prompt("Enter curentYear");
currentYear = parseInt(currentYear)
var birthYear = prompt("Enter your birthYear");
birthYear = parseInt(birthYear);
var age = currentYear - birthYear;

console.log("Hello " + name + "! Based on your input, your age is " + age + " :)");

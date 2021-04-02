var vegetables1, vegetables2, vegetables3, vegetables4, vegetables5;

vegetables1 = "Cucumber";
vegetables2 = "Tomatoes";
vegetables3 = "Onion";
vegetables4 = "Pepper";
vegetables5 = "Carrot";

console.log("list of vegetables");
console.log(vegetables1);
console.log(vegetables2);
console.log(vegetables3);
console.log(vegetables4);
console.log(vegetables5);

var amountOfVegetables1, amountOfVegetables2, amountOfVegetables3, amountOfVegetables4, amountOfVegetables5;

var amountOfVegetables1 = parseInt(prompt("enter the amount of " + vegetables1));
var amountOfVegetables2 = parseInt(prompt("enter the amount of " + vegetables2));
var amountOfVegetables3 = parseInt(prompt("enter the amount of " + vegetables3));
var amountOfVegetables4 = parseInt(prompt("enter the amount of " + vegetables4));
var amountOfVegetables5 = parseInt(prompt("enter the amount of " + vegetables5));

var price1 = 2.5, price2 = 3, price3 = 1.5, price4 = 2, price5 = 5;



console.log(amountOfVegetables1 + " " + vegetables1 + " is " + (amountOfVegetables1*price1) + " dollars...");
console.log(amountOfVegetables2 + " " + vegetables2 + " is " + (amountOfVegetables2*price2) + " dollars...");
console.log(amountOfVegetables3 + " " + vegetables3 + " is " + (amountOfVegetables3*price3) + " dollars...");
console.log(amountOfVegetables4 + " " + vegetables4 + " is " + (amountOfVegetables4*price4) + " dollars...");
console.log(amountOfVegetables5 + " " + vegetables5 + " is " + (amountOfVegetables5*price5) + " dollars...");

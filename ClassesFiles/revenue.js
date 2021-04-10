var price = parseFloat(prompt("enter the price of product please"));
var quantity = parseInt(prompt("enter the quantity of product please"));

var revenue = price*quantity;
if (revenue > 5000) {
revenue = revenue - (revenue*0.10);
}
console.log("the revenues is : " + revenue);

var income = parseFloat(prompt("please enter your income"));

var tax;

if (income <= 150000000) {
tax = income * 0.25;
}else if (income <= 300000000) {
  tax = (income - 150000000) * 0.30;
  tax += 150000000 * 0.25
}else if (income <= 600000000) {
  tax = (income - 300000000) * 0.35;
  tax += 150000000 * 0.30;
  tax += 150000000 * 0.25;
}else if (income <= 1200000000) {
  tax = (income - 600000000) * 0.40;
  tax += 300000000 * 0.35;
  tax += 150000000 * 0.30;
  tax += 150000000 * 0.25;
}else {
  tax = (income - 1200000000) * 0.50;
  tax += 600000000 * 0.40;
  tax += 300000000 * 0.35;
  tax += 150000000 * 0.30;
  tax += 150000000 * 0.25;
}

console.log("the tax amount you have to pay : " + parseFloat(tax));

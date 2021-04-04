var bill, call;

call = parseInt(prompt("enter the number of calls"));

if (call <= 100) {
  bill = 200;
}else if (call >100 && call <=150) {
  bill = 200 + ((call - 100)*0.60 );
}else if (call > 150 && call <=200) {
  bill = 200 + (50 * 0.60) + ((call- 150)*0.50);
}else {
  bill = 200 + (50 * 0.60) + (50 * 0.50) +((call- 200)*0.40);
}

console.log("Your bill is : $" + bill);

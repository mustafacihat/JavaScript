var day = parseInt(prompt("enter the day number"));


if (day == 1) {
    console.log("MondaY");
}else if (day == 2) {
  console.log("TuesdaY");
}else if (day == 3) {
  console.log("WednesdaY");
}else if (day == 4) {
  console.log("ThursdaY");
}else if (day == 5) {
  console.log("FridaY");
}else if (day == 6) {
  console.log("SaturdaY");
}else if (day == 7) {
console.log("SundaY");
}else {
console.log("Not a valid day");
}


var a = parseInt(prompt("enter the value of a"));
var b = parseInt(prompt("enter the value of b"));
var c = parseInt(prompt("enter the value of c"));

if (a > b && a > c) {
  console.log(a + " is the greatest number");
}else if (b > a && b > c) {
  console.log(b + " is the greatest number");
}else {
  console.log(c + " is the greatest number");
}

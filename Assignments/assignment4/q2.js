var number = parseInt(prompt("enter your number"));


switch (number) {
  case 0:
  case 1:
  case 2:
    console.log("Low Number.");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Medium Number.");
    break;
  default:
    console.log("Other Number");
}

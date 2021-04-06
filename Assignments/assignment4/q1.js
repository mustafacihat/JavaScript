var number = parseInt(prompt("enter the number whether it is even or odd"));

var remainder = number % 2;


switch (remainder) {
  case 1:
    console.log(number + " is ODD!");
    break;
    case 0:
      console.log(number + " is EVEN!");
      break;
  default:

}

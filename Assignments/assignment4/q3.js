var totalCost = parseFloat(prompt("enter the cost"));


switch (totalCost) {
  case 1000:
    console.log(totalCost - (totalCost * 0.05));
    break;
    case 10000:
      console.log(totalCost - (totalCost * 0.08));
      break;
  default:
  console.log(totalCost);

}

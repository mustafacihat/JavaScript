// var foodType;
//
// foodType = prompt("Enter your favourite food");
//
// switch (foodType) {
//   case "Turkish":
//       console.log("You love kebap");
//       break;
//   case "Italian":
//       console.log("You love pizza");
//       break;
//   case "Uyghur":
//       console.log("You love laghman");
//       break;
//   default:
//   console.log("no more options");
// }


// var computerBrand = prompt("enter the brand of computer");
//
// switch (computerBrand) {
//   case "apple":
//     console.log("Apple-no virsu");
//     break;
//   case "dell":
//     console.log("Tough one");
//     break;
//   case "acer":
//     console.log("Cheap one");
//     break;
//   default:
//     console.log("do not buy that one");
// }

var day;
for (var i =1; i <= 7; i++) {
day = i==1 ?
"Monday" : i==2 ?
"Tuesday" : i == 3 ?
"Wednesday" : i == 4 ? "Thursday" : i == 5 ? "Friday" : i == 6 ? "Saturday" : "Sunday";
console.log(day);
}


var allDays = parseInt(prompt("enter the a number for define the day"));

switch (allDays) {
  case 1:
    console.log("Monday");
    break;
    case 2:
      console.log("Tuseday");
      break;
      case 3:
        console.log("Wednesday");
        break;
        case 4:
          console.log("Thursday");
          break;
          case 5:
            console.log("Friday");
            break;
            case 6:
              console.log("Saturday");
              break;
              case 7:
                console.log("Sunday");
                break;
  default:
    console.log("the number is not valid for defining the day");
}

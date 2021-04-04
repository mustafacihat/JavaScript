var year = parseInt(prompt("enter the year please"));
var leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

if (leapYear ) {
  console.log(year + " LEAP YEAR");
}else {
  console.log("NOT a leap year");
}

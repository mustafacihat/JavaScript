var numberOfWaterMelon = 10;

if (numberOfWaterMelon >= 20) {
console.log("I have 20 and more watermelon");
}

var firstName = prompt("enter your name");
var status = prompt("enter your status");

if (status=="Married") {
  console.log(firstName + " is married!!!");
}


//Ask user to enter temp of the room. Temp between 70 and 80 F is an ideal temp.

var temp = prompt("enter the temp of the room");
temp = parseInt(temp);

if (temp >=70 && temp <=80) {
  console.log("The temp of room is in ideal range");
}

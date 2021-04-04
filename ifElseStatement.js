var firstName = "Mike";
var status = "Married";

if (status == "Married") {
  console.log("Mike is Married");
}else {
  console.log("Mike is Single");
}

var numberOfWaterMelon = 20;

if (numberOfWaterMelon > 20) {
  console.log("I have more than 20 watermelon");
}else {
  console.log("I do not have more than 20 watermelon");
}


//Task
// We are checking if we can have free shipping from amazon or not when we order
//
// you have membership -> yes
// order amount > $40 -> yes

// var membership = false;
// var orderAmount = 33;
//
// if (membership == true || orderAmount > 40) {
//   console.log("You have free shipping from amazon ");
// }else {
//   console.log("You DO NOT have free shipping from amazon. Do you want to sign " +
//   "up for membership?");
// }
//
// var num1 = parseInt(prompt("Enter the value of num1"));
//
// var num2 = parseInt(prompt("Enter the value of num2"));
//
//
// if (num1>num2) {
//   console.log(num1 + " is greater than " + num2);
// }else {
//   console.log(num2 + " is greater than " + num1);
// }

var hour = parseInt(prompt("Please enter the hour"));

if (hour < 12) {
  console.log("good morning");
}else {
  if (hour < 15) {
    console.log("good afternoon");
  }else {
    console.log("good night");
  }
}

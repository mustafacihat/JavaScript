console.log("javascript");
console.log("javascript");
console.log("javascript");
console.log("javascript");
console.log("javascript");


for (var i = 0; i < 5; i++) {
    console.log("js");
}


for (var i = 0; i <= 10; i += 2) {
    console.log(i)
}

for (var i = 0; i < 51; i++) {
    if (i % 4 == 0) {
        console.log(i);
    }
}
console.log("====================================")

for (var i = 0; i < 51; i += 4) {
    if (i % 4 == 0) {
        console.log(i);
    }
}

console.log("===================================")

for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i + " : is divisible by 3");
    } else
        console.log((i + " : is not divisible by 3"));
}

console.log("===============================");


var times = parseInt(prompt("enter the iteration times"));


for (var i = 0; i < times; i++) {

    var num1 = parseInt(prompt("enter the first number"));
    var num2 = parseInt(prompt("enter the second number"));

    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is greater than" + num1);
    } else {
        console.log(num1 + " is equal to " + num2);
    }
}


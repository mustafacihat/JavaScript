var marks = parseInt(prompt("enter the marks"));

if (marks >= 0 && marks <=100) {
  if (marks < 60) {
    console.log("Fail");
  }else if (marks >= 60 && marks<90) {
    console.log("Pass");
  }else {
    console.log("Passed with Distinction");
  }
}else {
  console.log("The marks:( invalid!!!!!!");
}

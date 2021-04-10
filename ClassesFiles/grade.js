var math = parseInt(prompt("enter the scores of math class"));
var chemistry = parseInt(prompt("enter the scores of chemistry class"));
var biology = parseInt(prompt("enter the scores of biology class"));

var average = (math + chemistry + biology) / 3;
var grade;
if ((math>=0 && math <=100) && (chemistry>=0 && chemistry <=100) && (biology>=0 && biology <=100)  ) {
  if (average >=90 && average <=100) {
      grade = "A";
  }else if (average >=80 && average <90) {
      grade = "B";
  }else if (average >=70 && average <80) {
      grade = "C";
  }else if (average >=60 && average <70) {
      grade = "D";
  }else {
    grade = "F";
  }
    console.log("Grade is " + grade);
}else {
  console.log("the scores are not valid");
}

var userName = prompt("enter your user name please");
var password = prompt("enter your password please");

var actualUsername = "userName123";
var actualPassword = "password123";

if (userName === "" && password === "") {
  console.log("UserName and Password Fields can not be empty");
}else if (userName === "" && password != "") {
  console.log("UserName can not be empty");
}else if (userName != "" && password ==="") {
  console.log("Password can not be empty");
}else if (userName != actualUsername || password != actualPassword) {
  console.log("UserName or password is not valid. Please verify");
}else if (userName === actualUsername && password === actualPassword) {
  console.log("User logged in successfully");
}

//Logical AND
console.log(true&&true);//true
console.log(true&&false);//false
console.log(true&&(3==4));//false

//Logical OR
console.log(true||true);//true
console.log(true||false);//true
console.log((3==4)||true);//true
console.log((3!==3)||false);//false


var b = 2;
var res = ++b == 2 || --b == 2 && --b == 2;
console.log(res);

var x = true, z = true;
var y = 20;

x = (y!=10) || (z=false);
console.log(x);

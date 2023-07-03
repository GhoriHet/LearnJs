// Debug
 console.log("Hello World!");

// User Alert
// alert("Hiee");

// HTML write
// document.write('<p>JavaScript</p>');

// Input Method
// var x = parseInt(prompt("Please enter your age: ", 0)) ;
// console.log(x);

// var y = parseInt(prompt("Please enter your age: ", 0));
// console.log(y);

// var z = parseInt(prompt("Please enter your age: ", 0));
// console.log(z);

// Average Find
// var w = (x + y + z) / 3;
// console.log(w);


// PERCENTAGE
// var x = parseInt(prompt("Please enter your marks: ", 0)) ;
// var y = parseInt(prompt("Please enter your marks: ", 0)) ;
// var z = parseInt(prompt("Please enter your marks: ", 0)) ;

// var w = (x + y + z) / 3;
// console.log(w);

// Area Of Rectangle
// var w = parseInt(prompt("Please enter Width: ", 0));
// var l = parseInt(prompt("Please enter Length: ", 0));

// var ans = w * l;
// console.log(ans);

// Compound Intreset
var P = parseInt(prompt("Please enter principle Amount: "));
var R = parseInt(prompt("Please enter Rate: "));
// var N = parseInt(prompt("number of times interest is compounded per year: "));
var T = parseInt(prompt("Please enter time (in years): "));

var Amount= P(1 + R/100) *T;
var ci = Amount - P;
console.log(ci);
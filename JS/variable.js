// we can declare the same name variable.
// var x = 10;
// var x = 20;
// console.log(x); // 20

// var have not have any block scope.
// {
//     var x = 30;
// }
// console.log(x); // 30


// We can not redeclare the same name variable.
// let x = 10;
// let x = 20;
// console.log(x); // error

// let have a block scope.
// let x = 10;
// {
//     let x = 20;
// }
// console.log(x); // 10

// let x; // declare
// x = 5; // intialization
// x = x + 10; // changed
// console.log(x); // 15


// We can not redeclare the same name variable.
// const x = 10;
// const x = 20;
// console.log(x); // error

// Declaration and intialization must be done at same time.
// const x;
// x = 10;
// console.log(x); // error

// We can not change the value of const variable.
// const x = 10;
// x = x + 5;
// console.log(x); // error

// const have a block scope.
// const x = 10;
// {
//     const x = 20;
// }
// console.log(x); //10
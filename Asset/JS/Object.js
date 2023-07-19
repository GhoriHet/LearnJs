// Object Syntax.
// object={property1:value1,property2:value2.....propertyN:valueN}

// *******************************************************************************************************

// JavaScript is an object based language everything is an object in javascript. 

// *******************************************************************************************************

let person = {
    firstName: "Amit", // firstName is Oject Properties.
    age: 25,
    living : {
        'city' : 'Surat',
        'country' : 'India'
    }
}
// delete person.age; // Properties Delete.
// person.firstName = 'Het'; // Name Chnage In only object Properties.
// document.write(person) // error and [Object, Object]
// document.write(person.firstName , person.age)
// console.log(person.firstName, person.age); // amit 25
console.log(person); // Answer Array
// console.log(person['firstName'], person['age']); // amit 25

// console.log('email' in person); // To see if an object has properties (True or False.)

// For Loop Method.
// for (let answer in person) {
//     console.log(answer + ': ' + person[answer]);
// }

// *******************************************************************************************************

// const person = [
//     {
//         name: "amit",
//         age: 25 ,
//     },
//     {
//         name: "piyush",
//         age: 74 ,
//     }
// ];

// console.log(person); // Answer Is Array. 0: {name: 'amit', age: 25} , 1: {name: 'piyush', age: 74}
// person.map((v,i)=> console.log(v.name, v.age));

// *******************************************************************************************************

// const person = [
//     {
//         name: "amit",
//         age: 25,

//         course: [
//             "c",
//             "html",
//         ]
//     }
// ];

// person.map((a) => {

//     console.log(a.name, a.age);
//     a.course.map((value) => {
//         console.log(value);
//     })
// })

// *******************************************************************************************************
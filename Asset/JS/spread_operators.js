// Spread
// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}


// Destructuring 
// assigning object attributes to variables
// const person = {
//     name: 'Amit Patel',
//     age: 25,
//     gender: 'Male'    
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Amit Patel
// console.log(age); // 25
// console.log(gender); // Male


// Merging
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'SURAT'
};

let employee = {
    ...person,
    ...job
};

console.log(employee);
//  Function Defind
// function greeting() {
//     console.log("Good Evening");
// }
//  Function Call
// greeting();


// Arrow Function
// const greeting = () => {
//     console.log("Good Evening");
// }
// greeting();


// Calculate Age
// const calculateAge = (dob_year) => { //2
//     let age = 2023 - dob_year;
//     return age; // 3
// }

// let res = calculateAge(1997); // 1  // 4
// console.log(res); // 5


// Nested Function.

// Calculate const.
const costing = (place) => {  //4
    if (place === 'goa') { //5
        return 35000;
    } else if (place === 'bali') {
        return 85000;
    }
}

// Packges.
const packages = (p1, p2) => { //2
    let cost1 = costing(p1);//3 //6
    let cost2 = costing(p2);

    let msg = p1 + " cost you " + cost1 + ' and ' + p2 + " cost you " + cost2;

    return msg; //7
}

let disp = packages('goa', 'bali'); //1 //8
console.log(disp);
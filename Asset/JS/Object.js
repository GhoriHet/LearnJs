// -------------------------1-------------------------
// const person = {
//     name: "amit",
//     Age : "20"
// }
// console.log(person.name, person.Age);
// console.log(person["name"], person["Age"]);

// -------------------------2-------------------------

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];
// person.map((v) => console.log(v.name, v.age))

// -------------------------3-------------------------

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html"
//         ]
//     }
// ]
// person.map((a) => {
//     console.log(a.name, a.age);
//     a.course.map((value) => {
//         console.log(value);
//     })
// })

// -------------------------4-------------------------

// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((a) => console.log(a.name, a.age, a.course.c1, a.course.c2))

// -------------------------5-------------------------

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html"
//         ]
//     }

// ]


// const myObj = {
//     name: "jd",
//     age: 20,
//     cars: {
//         car1: "ford",
//         car2: "breza",
//         car3: "BMW"
//     }
// }

// for (let k in myObj) {
//     if (k === 'cars') {
//         for (let k1 in myObj[k]) {
//             console.log(myObj[k][k1]);
//         }
//     } else {
//         console.log(myObj[k]);
//     }
// }

// -------------------------6-------------------------

let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat : 10
        }
    }
}

for (let i in data) {
    if (i === 'personal_info') {
        for (let i1 in data[i]) {
            console.log(data[i][i1]);
        }
    } else if (i === 'courses') {
        data.courses.map((v) => console.log(v))
    } else if (i === 'branches') {
        for (let k in data[i]) {
            for (let k1 in data[i][k]) {
                console.log(data[i][k][k1]);
            }
        }
    }
}
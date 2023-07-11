// // Outer Function
// const personalInfo = (name) => {
//     let age = 17;

//     // Inner Function
//     return function persInfo() {
//         let salary = 45000;

//         console.log(name);
//         console.log(age);
//         console.log(salary);
//     }
// }

// let res = personalInfo('Het');
// console.log(res);
// res();


// let count = 0;

// const increment = () => {
//     count++;
//     console.log(count);
// }
// // Global Problem
// count = count + 5;

// const decrement = () => {
//     count--;
//     console.log(count)
// }

// increment();
// increment();
// increment();

// console.log("-----------------------");

// decrement();
// decrement();





// // Local Problem
// const increment = () => {
//     let count = 0; // Local Problem
//     count++;
//     console.log(count);
// }
// const decrement = () => {
//     let count = 0; // Local Problem
//     count--;
//     console.log(count)
// }

// increment();
// increment();
// increment();

// console.log("-----------------------");

// decrement();
// decrement();




// Closure Solutions
// const counterOuter = () => { //2
//     let count = 0; // Outer Variable

//     let inc = function countInnerInc() { //4 //6 //8
//         count++;
//         console.log(count);
//     }

//     let dec = function countInnerInc() { //4 //6 //8
//         count--;
//         console.log(count);
//     }

//     return {increment: inc, decrement: dec};
// }

// // let res = counterOuter(); //1
// // res(); //3
// // res(); //5
// // res(); //7

// let res = counterOuter(); //1
// res.increment();
// res.increment();

// res.decrement();
// res.increment();
// res.increment();
// res.increment();


// // let res1 = counterOuter();
// // res1(); // Ans = 1
// // res1(); // Ans = 2



// ***************************************************

// const buyOrange = () => {
//     let fruit = "oranges";

//     const prepareJuice = () => {
//         console.log("Let's Sqaush:" + fruit + " juice is ready");
//     }
//     return prepareJuice;
// }

// // const serveJuiceInGlass = buyOrange();

// // serveJuiceInGlass();

// let res = buyOrange();
// console.log(res);
// res();

// ***************************************************

// const garden = () => {
//     var vegetables = ["Tomato", "Carrot", "Potato"];

//     const plantVegetable = () => {
//         console.log(vegetables + ' Has Been Planted In The Garden.');
//     }
//     return plantVegetable;
// }
// let res = garden();
// res()


// 2nd method

// const garden = () => {
//     let vegetables = [];

//     const plantVegetable = (veggie) => {
//         vegetables.push(veggie);
//         console.log(veggie + ' Has Been Planted In The Garden.');
//     }
//     return plantVegetable;
// }
// let res = garden();
// res('Tomato');
// res('Potato');
// res('Carrot')


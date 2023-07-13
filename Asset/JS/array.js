let arr = [10, 20, 30, 40, 'Het', 60, 70];

// let arr1 = [500, 1000]
// console.log(arr);

// for (let i=0; i<arr.length; i++) {
//     console.log(arr);
// }

// arr.forEach((value, index) => {
//     console.log(index, value);
// });

// arr.map((v, i) => {
//     console.log(i, v);
// })

// arr.map((v, i) => console.log(i, v));

// *****************************************

// Update In Array.
// arr[2] = 1000;
// console.log(arr);

// *****************************************

// Add In Array.
// arr.push(100); // last add
// console.log(arr);

// arr.unshift(200); // first add
// console.log(arr);

// arr.splice(2, 0, 500, 600);
// console.log(arr);

// *****************************************

// Remove In Array.
// arr.pop(); // last remove
// console.log(arr);

// arr.shift(); // first remove
// console.log(arr);

// arr.splice(2, 3);
// console.log(arr);

// *****************************************

// Array Are Object.
// console.log(typeof(arr));

// *****************************************

// Array Functions.

// Array.isArray(arr);
// console.log(arr);

// let NewArray = arr.concat(arr1)
// console.log(NewArray);

// let ans = arr.some((a) => a > 10);
// console.log(ans);

// console.log(arr.toString());

// let ans = arr.find((a) => a > 50);
// console.log(ans);

// *****************************************

// 1. Function In Filter.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6); // Get every element in the array that has a value of 6 or more:

// console.log(result); // answer : exuberant, dedestruction, present


// 2. Function In Reduce.

// const numbers = [1, 2, 3, 4, 5, 6];

// let answer = numbers.reduce((h1, h2) => h1 + h2); // 1 + 2 = 3 // 3 + 3 = 6 // 6 + 4 = 10 // 10 + 5 = 15 // 15 + 6 = 21
// console.log(answer); // answer : 21


// 3. Function In Join.

// const vegetable = ["potato", "tomato", "carrot", "onion"];

// let answer = vegetable.join(); // join() returns an array as a string:
// console.log(answer); // Answer: potato,tomato,carrot,onion


// 4. Function In Slice.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// let answer = fruits.slice(1, 4); // Array.slice() returns selected array elements as a new array:
// console.log(answer); // Answer: 'Orange', 'Lemon', 'Apple' 


// 5. Function In Fill.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fill() fills specified elements in an array with a value.
let answer = fruits.fill("Grapes")  // Fill all array elements with "Grapes":
console.log(answer); // Answer: 'Grapes', 'Grapes', 'Grapes', 'Grapes'
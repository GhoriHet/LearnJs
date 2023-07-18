// 1) Finding the maximum element in an array

// let arr = [23, 20, 49, 89, 72];
// let max = arr[0];

// const maxArray = (data) => {
//     for (let i = 1; i < data.length; i++) {
//         if (data[i] > max) {
//             max = data[i];
//         }
//     }
// }
// maxArray(arr)
// console.log(max);



// 2) Finding the minimum element in an array.

// let arr = [20, 23, 45, 77, 89];
// let min = arr[0];

// const minArray = (data) => {
//     for (let i=1; i<data.length; i++) {
//         if (data[i] < min) {
//             min = data[i];
//         }
//     }
// }
// minArray(arr);
// console.log(min);



// 3) Sorting an array in ascending order.

// let arr1 = [11, 23, 44, 5, 89];
// const ascending = (data) => {
//     let ans = data.sort((a, b) => a - b);
//     console.log(ans);
// }
// ascending(arr1);



// 4) Sorting an array in descending order.

// let arr1 = [11, 23, 44, 5, 89];
// const descending = (data) => {
//     let ans = data.sort((a, b) => b - a);
//     console.log(ans);
// }
// descending(arr1)



// 5) Reversing an array.

// let arr1 = [11, 23, 22, 5, 89];
// const revArry = (data) => {
//     let ans = data.reverse();
//     console.log(ans);
// }
// revArry(arr1);



// 6) Finding the sum of all elements in an array.

// let arr = [23, 5, 44, 76, 81];
// let i;
// let sum = 0;
// const sumArray = (data) => {
//     arr.map((v, i) => {
//         sum = sum + data[i];
//     });
//     console.log(sum);
// }
// sumArray(arr);



// 7) Finding the average of all elements in an array

// let arr = [23, 5, 44, 76, 81];
// let sum = 0;
// let avg = 0;
// const avgArray = (data) => {
//     data.map((v, i) => {
//         sum = sum + data[i];
//     });
//     avg = sum / data.length;
//     console.log(avg);
// }
// avgArray(arr);



// 8) Checking if an array contains a specific element.

// let arr = [23,5,44,76,81];
// const specificEle = (data) => {
// let ans = data.includes(5);
// console.log(ans);
// }
// specificEle(arr);



// 9) Removing duplicates from an array.

// let arr = [23, 5, 44, 5, 23];
// const removedupli = (data) => {
//     let unique = [];
//     data.map((v) => {
//         if (!unique.includes(v)) {
//             unique.push(v);
//         }
//     });
//     console.log(unique);
// }
// removedupli(arr);



// 10) Merging two arrays into a new array.

// let data1 = [11, 23, 44, 5, 89];
// let data2 = [1, 2, 3, 4, 5];
// let data3 = [8, 6, 7, 9, 22];
// const mergArray = (a, b, c) => {
//     let ans = a.concat(b, c);
//     console.log(ans);
// }
// mergArray(data1, data2, data3);



// 11) Splitting an array into two arrays based on a condition.

// let arr1 = [11, 'Ghori', 44, 5, 'Het', 45, 22, 'J.', 33];
// const spiliting = (data) => {
//     let a1 = [];
//     let a2 = [];
//     data.map((v) => {
//         if (typeof (v) === 'string') {
//             a1.push(v);
//         } else if (typeof (v) === 'number') {
//             a2.push(v);
//         }
//     });
//     console.log(a1, a2);
// }
// spiliting(arr1);



// 13) Rotating an array by a given number of positions.

// let arr1 = [11, 23, 44, 5, 89, 45, 22, 89, 33];
// const rotateArray = (data, n) => {
//     let a1 = data.slice(0, n);
//     let a2 = data.slice(n);
//     let ans = a2.concat(a1);
//     console.log(ans);
// }
// rotateArray(arr1, 3);



// 14) Finding the second largest element in an array.

// let arr1 = [23, 5, 99, 76, 81];
// const secondmaximum = (data) => {
//     let ans = data.sort((a, b) => b - a);
//     console.log(ans);
//     console.log(data[1]);
// }
// secondmaximum(arr1);



// 15) Finding the k-th smallest element in an array.

// let arr1 = [23, 5, 99, 76, 81];
// const secondmaximum = (data, n) => {
//     let ans = data.sort((a, b) => a - b);
//     console.log(ans);
//     console.log(data[n - 1]);
// }
// secondmaximum(arr1, 3);



// 17) Finding the median of an array.

// let arr1 = [23, 5, 99, 89, 81, 12];
// const median = (data) => {
//     let ans = Math.floor(data.length / 2); //2
//     if (data.length % 2 === 1) {
//         console.log(data[ans]);
//     } else {
//         console.log(data[ans] + data[ans - 1]);
//     }
// }
// median(arr1);



// 19) Checking if two arrays are equal or not.

// const sameArraynot = () => {
//     let arr1 = [1, 2, 3];
//     let arr2 = [3, 2, 1];
//     // let arr2 = [1, 2, 3];
//     let flag = true;
//     if (arr1.length == arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] == arr2[i]) {
//                 flag = true;
//             } else {
//                 flag = false;
//                 break;
//             }
//         };
//     } else {
//         console.log("Array are not same");
//     }
//     if (flag) {
//         console.log("Array are same");
//     } else {
//         console.log("Array are not same");
//     }
// }
// sameArraynot();



// 23) Finding the index of the first occurrence of an element in an array.

// let arr1 = [1, 2, 3, 4, 5, 6];
// const chekFirt = (arr1) => {
//     let ans = arr1.indexOf(5);
//     console.log(ans);
// }
// chekFirt(arr1); // 4



// 24) Finding the index of the last occurrence of an element in an array.

// let arr1 = [1, 2, 3, 4, 3, 5, 6];
// const chekLast = (arr1) => {
//     let ans = arr1.lastIndexOf(5);
//     console.log(ans);
// }
// chekLast(arr1); //5



// 25) Removing all occurrences of an element from an array.

// let arr = [23, 5, 44, 76, 44, 65, 23, 44, 12, 45, 90, 44];
// let fdata = arr.filter((v) => v !== 44);
// console.log(fdata);



// 26) Replacing all occurrences of an element in an array with a new element.

// let arr = [23, 5, 44, 76, 44, 65, 23, 44, 12, 45, 90, 44];
// const replace = (arr, oldelm, newelm) => {
//     let ans = arr.map((v) => v == oldelm ? newelm : v);
//     console.log(ans);
// }
// replace(arr, 44, 88);



// 27) Creating a new array with the elements of the original array in reverse order, without modifying the original array.

// let arr1 = [11, 23, 22, 5, 89];
// const revrese = (arr1) => {
//     let temp = [...arr1];
//     let ans = temp.reverse();
//     console.log(arr1);
//     console.log(ans);
// }
// revrese(arr1);



// 28) Checking if an array is sorted in ascending order.

// let arr1 = [1, 2, 3, 4, 5];
// const checkAscending = (arr1) => {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > arr1[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkAscending(arr1));



// 29) Checking if an array is sorted in descending order.

// let arr1 = [5, 4, 3, 2, 1];
// const checkdesce = (arr1) => {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] < arr1[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkdesce(arr1));



// 30) Finding the first three maximum number's sum an array.

// let arr = [5, 44, 76, 65, 23, 12, 90];
// const maxsum = (arr) => {
//     let ans = arr.sort((a, b) => b - a)
//         .slice(0, 3)
//         .reduce((acc, v) => acc + v, 0);
//     console.log(ans);
// }
// maxsum(arr);
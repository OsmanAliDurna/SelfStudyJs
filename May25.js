const array = [10, 5, 2, 7, 8, 7];
const k = 5;
let result = array.map((item, index) =>
  Math.max(...array.slice(index, index + k))
);
console.log(result.slice(0, array.length - k + 1));

// let result = [];
// for (let i = 0; i < array.length - k + 1; i++) {
//   result.push(Math.max(...array.slice(i, i + k)));
// }
// console.log(result);

// const array2 = [1, 3, -1, -3, 5, 3, 6, 7];
// const k2 = 3;
// let result2 = [];

// for (let i = 0; i < array2.length - k2 + 1; i++) {
//   let max = -Infinity;
//   for (let j = i; j < i + k2; j++) {
//     if (max < array2[j]) {
//       max = array2[j];
//     }
//   }
//   result2.push(max);
// }

// console.log(result2);

"use strict";

function f(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Error: parameter must be an array");
    }

    let flatArr = [];

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        flatArr = flatArr.concat(f(el));
      } else if (typeof el === "number") {
        flatArr.push(el);
      } else {
        throw new Error("Error: element must be a number");
      }
    });
    return flatArr.reduce((acc, curr) => acc + curr, 0);
  } catch (err) {
    console.log(err);
  }
}

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];
console.log(f(arr)); // 12

const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // 3

const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // 6

const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0

const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // 3

const arr6 = 5;
console.log(f(arr6)); // Error: parameter must be an array

const arr7 = "sddasds";
console.log(f(arr7)); // Error: parameter must be an array

const arr8 = [[[[[], {}]]]];
console.log(f(arr8)); // Error: element must be a number

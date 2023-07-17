"use strict";

function getDivisors(num) {
  try {
    if (typeof num !== "number") {
      throw new Error("Error: parameter type is not a Number");
    } else if (num === 0) {
      throw new Error("Error: parameter can't be a 0");
    } else if (num < 0) {
      throw new Error("Error: parameter can't be less than 0");
    }
    let newArr = [];
    for (let i = 1; i <= num; i++) {
      Number.isInteger(num / i) && newArr.push(i);
    }
    return newArr;
  } catch (error) {
    console.error(error);
  }
}

console.log(getDivisors(12));
console.log(getDivisors("Content")); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0

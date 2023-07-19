"use strict";

function reverse(arr) {
  try {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error(
        "Error: parameter must be an array and must not be empty"
      );
    }
    const length = arr.length;

    for (let i = length - 1; i >= 0; i--) {
      arr.push(arr[i]);
    }

    arr.splice(0, length);
    return arr;
  } catch (err) {
    console.log(err);
  }
}

console.log(reverse([1, 8, 5, 2, 3, 10]));

console.log(reverse("dsadsa"));
console.log(reverse([]));

"use strict";

function f(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Error: parameter type should be an array");
    } else if (arr.length === 0) {
      throw new Error("Error: parameter can't be an empty");
    }
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        throw new Error("Error: parameter type should be array of numbers");
      } else {
        console.log(arr[i]);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

f([1, 2, 3]);
f(1, 2, 3); // Error: parameter type should be an array
f("Content"); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty
f(["🧛🏼", "👨🏽‍🔧", 5, "dogs"]); // Error: parameter type should be array of numbers

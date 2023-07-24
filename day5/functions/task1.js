"use strict";

function mix(...funcs) {
  try {
    let result;
    for (const func of funcs) {
      if (typeof func === "function") {
        result = func(result);
      } else {
        throw new Error("Parameter must be only function");
      }
    }
    return result;
  } catch (err) {
    console.error(err);
  }
}

console.log(
  mix(
    () => {
      return 0;
    },
    (prev) => {
      return prev + 1;
    },
    (prev) => {
      return prev * 2;
    }
  )
); // 2)

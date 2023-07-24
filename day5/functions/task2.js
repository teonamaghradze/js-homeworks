"use strict";

function mix(...funcs) {
  let result = 0;
  const results = {
    errors: [],
    value: undefined,
  };

  for (const func of funcs) {
    try {
      if (typeof func === "function") {
        results.value = func(results.value);
      } else {
        throw new Error("Parameter must be only function");
      }
    } catch (err) {
      results.errors.push({
        name: err.name,
        message: err.message,
        stack: err.stack,
        level: result,
      });
    }
    result++;
  }
  return results;
}

console.log(
  mix(
    5,
    (prev) => {
      return prev + 1;
    },
    (prev) => {
      throw new RangeError("Range is wrong");
    },
    (prev) => {
      return prev * 3;
    }
  )
);

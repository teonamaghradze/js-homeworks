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
    () => {
      return 0;
    },
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
// Function returns
// {
//     errors: [{
//             name: 'RangeError',
//             message: 'Range is wrong',
//             stack: '... stack of your error ...',
//             level: 2
//     }],
//     value: 3
// }

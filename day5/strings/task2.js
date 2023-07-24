"use strict";

function reverseCase(sentence) {
  try {
    if (typeof sentence !== "string") {
      throw new Error("parameter must be only string");
    } else {
      let reversedArr = sentence.split("").map((el) => {
        return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
      });

      return reversedArr.join("");
    }
  } catch (err) {
    console.error(err);
  }
}

console.log(reverseCase("Hello theRe")); // Output: 'hELLO THErE'
console.log(reverseCase("BIG LETTERS")); // expected: 'big letters'`
console.log(reverseCase("")); // expected: ''

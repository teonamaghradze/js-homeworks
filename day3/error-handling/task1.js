"use strict";

const nearLimit = 90;
const limit = 100;

function valueValidate(value) {
  if (value > nearLimit) {
    console.log("Warning: value is more than the nearLimit");
  }
  if (value > limit) {
    throw new Error("Error: value is more than the limit");
  }
}

try {
  valueValidate(110);
} catch (error) {
  console.error(error);
}

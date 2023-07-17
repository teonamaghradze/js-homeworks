// Write a function `genericFunction(func)` that takes another function as its only parameter. inside `genericFunction` you have to call ( execute ) function that was passed by parameter.
// `genericFunction` must be prepared for errors and handle them by logging error messages in the console.

function genericFunction(func) {
  try {
    return func();
  } catch (error) {
    console.error(error);
  }
}

function errorFunc() {
  throw new Error("Error message");
}

genericFunction(errorFunc);

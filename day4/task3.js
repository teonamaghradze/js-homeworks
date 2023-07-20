function rotate(arr, num, order = "right") {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("First parameter must be only array");
    }

    if (typeof num !== "number") {
      throw new Error("Second parameter must be a number");
    }

    if (order && typeof order !== "string") {
      throw new Error("Third parameter must be a string");
    }
    if (order.toLowerCase() !== "left" && order.toLowerCase() !== "right") {
      throw new Error(
        'Invalid direction. direction must be "right" or "left" '
      );
    }

    const rotations = num % arr.length;

    return order === "left"
      ? arr.slice(rotations).concat(arr.slice(0, rotations))
      : arr.slice(-rotations).concat(arr.slice(0, arr.length - rotations));
  } catch (err) {
    console.error(err);
  }
}

const arr = [1, 2, 3];
console.log(rotate(arr, 1, "left")); // result: [2, 3, 1]
console.log(rotate(arr, 1)); // result: [3, 1, 2]
console.log(rotate(arr, 2)); // result: [2, 3, 1]

console.log(rotate([], 2));
console.log(rotate([1, 3], "dss"));

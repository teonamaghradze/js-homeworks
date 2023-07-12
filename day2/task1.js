// You have array `[2, 5, 9, 15, 0, 4]`. Using loop `for` and operator `if`, show in console, elements which are greater than 3, but lesser than 10.

const arr = [2, 5, 9, 25, 0, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

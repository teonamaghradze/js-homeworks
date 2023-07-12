// Use following code to generate a random number between 0 and 9. : `Math.floor(Math.random() * 10);`.
// Write a while loop and print 'not 5' in every iteration until number 5 gets randomly generated.

let n = Math.floor(Math.random() * 10);
while (n !== 5) {
  console.log("not 5");
  n = Math.floor(Math.random() * 10);
}

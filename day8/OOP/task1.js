Function.prototype.delay = function (ms) {
  const originalFunction = this;
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function f() {
  console.log("hello");
}

f.delay(1000)(); // print "hello" after 1 second

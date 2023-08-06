function Hamster() {
  this.food = [];
}

// Hamster.prototype.food = []; // empty "stomach"

Hamster.prototype.found = function (something) {
  this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)

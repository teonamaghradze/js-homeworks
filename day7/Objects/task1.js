Object.defineProperty(Object.prototype, "mergeDeepRight", {
  enumerable: false,
  value: function mergeDeepRight(source, target = this) {
    for (const key in source) {
      if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        target[key].unshift(...source[key]);
      } else if (
        typeof source[key] === "object" &&
        typeof target[key] === "object"
      ) {
        mergeDeepRight(source[key], target[key]);
      } else target[key] = source[key];
    }
  },
});

// test
const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

data.mergeDeepRight({
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
});

console.log(data);

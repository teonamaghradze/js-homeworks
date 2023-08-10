class DB {
  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  create(obj) {
    if (typeof obj !== "object" || obj === null) {
      throw new Error("parameter must be object");
    }
    if (
      !Object.keys(obj).includes("name") ||
      !Object.keys(obj).includes("age") ||
      !Object.keys(obj).includes("country") ||
      !Object.keys(obj).includes("salary") ||
      Object.keys(obj).length !== 4
    ) {
      throw new Error(`Parameter must be object with 4 keys `);
    }

    const id = this.currentId.toString();
    this.currentId++;
    this.users.set(id, { id, ...obj });

    return id;
  }

  read(id) {
    if (typeof id !== "string") {
      throw new Error("id must be a string");
    }
    return this.users.get(id) || null;
  }

  readAll() {
    return [...this.users.values()];
  }

  update(id, updateData) {
    if (typeof id !== "string") {
      throw new Error("id must be a string");
    }

    if (!this.users.has(id)) {
      throw new Error("User not found");
    }

    if (typeof updateData !== "object" || updateData === null) {
      throw new Error("new data must be an object");
    }

    const updateObj = { ...this.users.get(id), ...updateData };
    this.users.set(id, updateObj);
    return id;
  }

  delete(id) {
    if (typeof id !== "string") {
      throw new Error("id must be a string");
    }
    if (!this.users.has(id)) {
      throw new Error("User not found");
    }
    return this.users.delete(id);
  }
}

const db = new DB();
const person = {
  name: "Pitter",
  age: 21,
  country: "ge",
  salary: 500,
};

const id = db.create(person);
console.log(id); // Output: '1'

const customer = db.read(id);
console.log(customer); // Output: { id: '1', name: 'Pitter', age: 21, country: 'ge', salary: 500 }

const customers = db.readAll();
console.log(customers); // Array of user objects

db.update(id, { age: 22 });
console.log(db.read(id)); // Updated user object

const deleted = db.delete(id);
console.log(deleted); // Output: true

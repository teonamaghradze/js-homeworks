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

  find(query) {
    if (typeof query !== "object" || query === null) {
      throw new Error("Parameter must be an object");
    }

    const { name, country, age, salary } = query;

    if (!name || !country || !age || !salary) {
      throw new Error(
        "object must have name, country, age, and salary properties"
      );
    }

    if (!age.min && !age.max) {
      throw new Error("Minimum or maximum age limit is required");
    }

    if (!salary.min && !salary.max) {
      throw new Error("Minimum or maximum salary limit is required");
    }

    const filteredUsers = [];
    this.users.forEach((user) => {
      const isAgeValid =
        (!age.min || user.age >= age.min) && (!age.max || user.age <= age.max);
      const isSalaryValid =
        (!salary.min || user.salary >= salary.min) &&
        (!salary.max || user.salary <= salary.max);

      if (
        user.name === name &&
        user.country === country &&
        isAgeValid &&
        isSalaryValid
      ) {
        filteredUsers.push(user);
      }
    });

    return filteredUsers;
  }
}

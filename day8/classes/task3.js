class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    if (year < 2019) {
      throw new Error("Year of admission must be 2019 or later.");
    }
    this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

var student = new Student("John", "Smith", 2018);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'Smith'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2018
console.log(student.getCourse()); // print 4 - fourth course, because current year 2022

var Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
    get daysAgo() {
      const currentDate = new Date();
      const difference = Math.floor(
        (currentDate - this.dateOfRead) / (1000 * 60 * 60 * 24)
      );
      return `${difference} days ago`;
    },
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
    get daysAgo() {
      const currentDate = new Date();
      const difference = Math.floor(
        (currentDate - this.dateOfRead) / (1000 * 60 * 60 * 24)
      );
      return `${difference} days ago`;
    },
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
    get daysAgo() {
      return "haven't read yet";
    },
  },
];

function readingStatus(books) {
  for (let book of books) {
    const status = book.haveRead ? `have read ${book.daysAgo}` : "haven't read";
    console.log(`${book.author} ${status} ${book.title} book`);
  }
}

readingStatus(Books);

var Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];

function readingStatus(books) {
  for (const book of books) {
    book.haveRead
      ? console.log(`${book.author} have read ${book.title} book`)
      : console.log(`${book.author} haven't read ${book.title} book yet`);
  }
}

readingStatus(Books);

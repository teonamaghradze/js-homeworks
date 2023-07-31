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
    const bookTitle = book.title;
    const authorName = book.author;
    const logString = `${authorName} ${status} ${bookTitle} book`;
    console.log(logString);
  }
}

readingStatus(Books);

// var Books = [
//   {
//     author: "Bill",
//     title: "The Road Ahead",
//     haveRead: true,
//     dateOfRead: new Date(2020, 10, 10),
//   },
//   {
//     author: "Steve",
//     title: "Walter Isaacson",
//     haveRead: true,
//     dateOfRead: new Date(2020, 10, 5),
//   },
//   {
//     author: "Jhon",
//     title: "The Hunger Games",
//     haveRead: false,
//     dateOfRead: NaN,
//   },
// ];

// function readingStatus(books) {
//   for (const book of books) {
//     Object.defineProperty(book, "daysAgo", {
//       get: function () {
//         if (!this.haveRead || isNaN(this.dateOfRead)) {
//           return "yet";
//         }

//         const currentDate = new Date();
//         const difference = Math.floor(
//           (currentDate - this.dateOfRead) / (1000 * 60 * 60 * 24)
//         );
//         return `${difference} days ago`;
//       },
//       enumerable: true,
//       configurable: true,
//     });
//   }

//   const booksArr = [];

//   for (const book of books) {
//     if (book.haveRead) {
//       booksArr.push(
//         `${book.author} have read ${book.title} book ${book.daysAgo}`
//       );
//     } else {
//       booksArr.push(
//         `${book.author} haven't read ${book.title} book ${book.daysAgo}`
//       );
//     }
//   }

//   return booksArr.join("\n");
// }

// console.log(readingStatus(Books));

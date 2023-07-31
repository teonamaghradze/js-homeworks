// function readingStatus(books) {
//   return books.map((el) => {
//     if (el.haveRead) {
//       return `${el.author} haven't read ${el.title} book yet`;
//     } else {
//       return `${el.author} have read ${el.title} book`;
//     }
//   });
// }

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

// console.log(readingStatus(Books));

//  'Bill have read The Road Ahead book'
// 'Steve have read Walter Isaacson book'
//'Jhon haven't read The Hunger Games book yet'

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
  const booksArr = [];

  for (const book of books) {
    if (book.haveRead) {
      booksArr.push(`${book.author} have read ${book.title} book`);
    } else {
      booksArr.push(`${book.author} haven't read ${book.title} book yet`);
    }
  }

  return booksArr.join("\n");
}

console.log(readingStatus(Books));

//
//

let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

// console.log(myBook);

let otherBook = {
  title: 'A Peoples history',
  author: 'Howard Zinn',
  pageCount: 723,
};

// console.log(otherBook);

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.summary);

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};

let temps = convertFahrenheit(174);
console.log(temps);

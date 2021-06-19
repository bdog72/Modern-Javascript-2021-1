//
//
let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);
myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

let person = {
  name: 'Bozo',
  age: 48,
  location: 'Florida',
};

const personInfo = `Person name is ${person.name}, he is ${person.age} years old, and they live in ${person.location} `;

console.log(personInfo);

person.age += 1;

console.log(
  `Person name is ${person.name}, he is ${person.age} years old, and they live in ${person.location} `
);

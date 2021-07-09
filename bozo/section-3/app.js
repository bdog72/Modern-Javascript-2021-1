'use strict';
//
//
// **************************************************

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriverLicense = true;
// }
// if (hasDriversLicense) console.log(`I can drive`);

// **************************************************

// function logger() {
//   console.log(`My name is Bozo`);
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// **************************************************

// function calcAge1(birthYear) {
//   return 2021 - birthYear;
// }

// const age1 = calcAge1(1972);
// console.log(age1);

// // -------------------------------------

// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// };

// const age2 = calcAge2(2000);
// console.log(age2);

// **************************************************

// const calcAge2 = (birthYear) => {
//   return 2021 - birthYear;
// };

// const age2 = calcAge2(2000);
// console.log(age2);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const yearsLeft = 65 - age;
//   // return yearsLeft;
//   return `${firstName} has ${yearsLeft} years left until retirement`;
// };

// console.log(yearsUntilRetirement(1972));
// const bozo = yearsUntilRetirement(1972, 'Bozo');
// console.log(bozo);

// **************************************************

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// const bozo = fruitProcessor(2, 3);
// console.log(bozo);

// **************************************************

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   // const age = 2021 - birthYear;
//   const age = calcAge(birthYear);
//   const yearsLeft = 65 - age;
//   if (yearsLeft > 0) {
//     return `${firstName} has ${yearsLeft} years left until retirement`;
//   } else {
//     return -1;
//     console.log('Bozo Already Retired');
//   }
// };

// console.log(yearsUntilRetirement(1972, 'Bozo'));
// console.log(yearsUntilRetirement(1952, 'Bozo'));
// const dork = yearsUntilRetirement(1952, 'Bozo');

// **************************************************

// const calcAverage = (a, b, c) => {
//   // checkWinner();
//   return (a + b + c) / 3;
// };

// const checkWinner = (dolphinsAverage, koalasAverage) => {
//   const bozo = [dolphinsAverage, koalasAverage];
//   return bozo;
//   console.log(dolphinsAverage);
//   console.log(koalasAverage);
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log(`No one wins bozo`);
//   }
// };

// const dolphinsAverage = calcAverage(44, 23, 71);
// console.log(dolphinsAverage);

// const koalasAverage = calcAverage(65, 54, 49);
// console.log(koalasAverage);

// checkWinner(dolphinsAverage, koalasAverage);
// checkWinner(200, 500);
// **************************************************

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const jonas = ['JOnas', 'Bozo', 2037 - 1991, 'Teacher', friends];
// console.log(jonas);

// function calcAge1(birthYear) {
//   return 2021 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);
// console.log(age1);
// console.log(age2);
// console.log(age3);

// const ages = [
//   calcAge1(years[0]),
//   calcAge1(years[1]),
//   calcAge1(years[years.length - 1]),
// ];

// console.log(ages);

// **************************************************

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();

// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

//////////////////////////////////////////////////

// const friends1 = ['Michael', 'Steven', 'Peter'];
// if (friends.includes('Steven')) {
//   console.log('Bozo');
// }

// **************************************************

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];

// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[3])];
// console.log(tip);

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// function calcTip(bills) {
//   bills.forEach((bill) => {
//     if (bill <= 300 && bill >= 50) {
//       console.log(`The bill was 15% -- $${bill * 0.15}`);
//     } else {
//       console.log(`The bill was 20% -- $${bill * 0.2}`);
//     }
//     console.log(bill);
//   });
// }

// calcTip(bills);

// **************************************************
// const bozo = {
//   firstName: 'Brian',
//   lastName: 'Bycynski',
//   age: 2021 - 1972,
//   job: 'Developer',
//   friends: ['Molly', 'Josey', 'Crystal'],
// };

// console.log(bozo.lastName);
// console.log(bozo['age']);

// const nameKey = 'Name';
// console.log(bozo['first' + nameKey]);
// console.log(bozo['last' + nameKey]);

// prompt('What do you ');

// console.log(
//   `${bozo['firstName']} has ${bozo.friends.length} friends. ${bozo.friends[0]}, ${bozo.friends[1]}, ${bozo.friends[2]}. And his best friend is ${bozo.friends[0]}`
// );

// **************************************************

// const bozo = {
//   firstName: 'Brian',
//   lastName: 'Bycynski',
//   birthYear: 1972,
//   hasDriversLicense: true,
//   job: 'Developer',
//   friends: ['Molly', 'Josey', 'Crystal'],

//   calcAge() {
//     return 2021 - this.birthYear;
//   },
// calcAge: () => {
//   return 2021 - bozo.birthYear;
// },

// driverLicense() {
//   if (this.hasDriversLicense) {
//     return 'a drivers license';
//   }
// },

//   getSummary() {
//     return `${this.firstName} ${
//       this.lastName
//     } is a ${this.calcAge()} year old ${this.job}. He has ${
//       this.friends.length
//     } friends. He has ${bozo.hasDriversLicense ? 'a' : 'no'} dirvers license`;
//   },
// };

// const dork = bozo.getSummary();
// console.log(dork);

// **************************************************

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// console.log(mark.bmi);

// john.calcBMI();
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `Mark BMI (${mark.bmi.toFixed(
//       2
//     )}) is higher than John BMI (${john.bmi.toFixed(2)}) `
//   );
// }

// const person1 = {
//   // firstName: 'Mark',
//   // lastName: 'Miller',
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     let BMI;
//     BMI = this.mass / this.height ** 2;
//     return BMI;
//   },
// };

// const person2 = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     let BMI;
//     BMI = this.mass / this.height ** 2;
//     return BMI;
//   },
// };

// const bozo1 = `${person1.firstName} ${person1.lastName}`;
// console.log(bozo1);

// const bozo2 = person2;
// console.log(bozo2.calcBMI());

// **************************************************

for (let rep = 1; rep <= 20; rep++) {
  console.log(`bozo ${rep}`);
}

// **************************************************

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

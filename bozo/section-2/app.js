//
//
// ************ CODING CHALLENGE #1 *****************

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / heightJohn ** 2;

// console.log(markBMI.toFixed(2));
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// **************************************************

// const firstName = 'Brian';
// const job = 'teacher';
// const birthYear = 1972;
// const year = 2037;

// const bozo = "I'm " + firstName;
// const bozo1 = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

// console.log(bozo);
// console.log(bozo1);

// **************************************************

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can get her Driving License');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is not old enough to drive. She has ${yearsLeft} years left before she can drive `
//   );
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// **************** CODING CHALLENGE 2 **************

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = (massMark / heightMark ** 2).toFixed(2);
// const johnBMI = (massJohn / heightJohn ** 2).toFixed(2);

// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`Marks BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }

// **************************************************

// const inputYear = '1991';
// console.log(Number(inputYear) + 18);
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number('Bozo'));
// console.log(String(123), 123);
// //////////////////////////////

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// **************************************************

// const money = 0;
// if (money) {
//   console.log(`Don't spend all your money`);
// } else {
//   console.log(`You should get a job`);
// }

// let height;
// if (height) {
//   console.log(`Height is defined`);
// } else {
//   console.log(`Height is not defined`);
// }

// **************************************************

// const age = 18;
// if (age === 18) {
//   console.log(`You are an adult`);
// }

// const favorite = Number(prompt('What is your favorite number'));

// console.log(+favorite);

// if (favorite == 23) {
//   console.log(`Cool 23 is a dope number`);
// } else if (favorite == 7) {
//   console.log(`7 is also a cool number`);
// } else {
//   alert(`Number is not 7 or 23`);
// }

// if (favorite !== 23) {
//   console.log(`Why not 23`);
// }

// **************************************************

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// console.log(!hasDriversLicense);
// console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Sarah is not able to drive`);
// }

// const isTired = false;

// console.log(hasDriversLicense || hasGoodVision || hasGoodVision);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Sarah is not able to drive`);
// }

// **************************************************

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Both win the trophy`);
// } else {
//   console.log(`Neither side scored at least 100 points average`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Both win the trophy`);
// }

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins Win`);
// } else if (scoreDolphins < scoreKoalas) {
//   console.log(`Koalas Win`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Tie Score Bozo`);
// } else if (scoreDolphins && scoreKoalas >= 100) {
//   console.log(`No one Wins Bozo`);
// }

// console.log(+scoreDolphins.toFixed(2));
// console.log(+scoreKoalas.toFixed(2));

// **************************************************

// let day = 'Thursday';
// day = day.toLowerCase();

// switch (day) {
//   case 'Monday':
//     console.log(1);
//     console.log(12);
//     break;
//   case 'Tuesday':
//     console.log(123);
//     break;
//   case 'Wednesday':
//   case 'thursday':
//     console.log(1234);
//     break;
//   case 'Friday':
//     console.log(12345);
//     break;
//   case 'Saturday':
//   case 'Sunday':
//     console.log(123456);
//     break;
//   default:
//     console.log(`Bozo`);
//     break;
// }

// let day = 'Thursday';
// day = day.toLowerCase();

// if (day === 'monday') {
//   console.log(1);
//   console.log(12);
// } else if (day === 'tuesday') {
//   console.log(123);
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log(1234);
// } else if (day === 'friday') {
//   console.log(12345);
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log(123456);
// } else {
//   console.log(`You are bozo`);
// }

// **************************************************

// **************************************************

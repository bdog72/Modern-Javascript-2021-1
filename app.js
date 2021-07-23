//
//
'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best bozo!', oneWord);

// console.log(oneWord('Bozo Boy'));

// const flight = 'LH234';
// const bozo = {
//   fullName: 'Bozo Boy',
//   passportNumber: 123456789,
// };

// const checkIn = function (flightNumber, passenger) {
//   flightNumber = 'LH999';
//   passenger.fullName = `Mr. ${passenger.fullName}`;

// if (passenger.passportNumber === 123456789) {
//   alert('Check In');
// } else {
//   alert(`Wrong Passport Bozo Boy`);
// }
// };

// checkIn(flight, bozo);
// console.log(flight);
// console.log(bozo);

// const newPassport = function () {};

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);

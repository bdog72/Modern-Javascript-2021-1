'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  // owner: 'Jonas Schmedtmann',
  owner: 'Test A',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  // owner: 'Jessica Davis',
  owner: 'Test B',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  // owner: 'Steven Thomas Williams',
  owner: 'Test C',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  // owner: 'Sarah Smith',
  owner: 'Test D',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const bozo = {
  containerMovements: document.querySelector('.movements'),
};

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  bozo.containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // prettier-ignore
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">$${mov}</div>
      </div>
    `;
    bozo.containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `$${balance} USD`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements.filter((mov) => {
    return mov > 0;
  });

  const addPositiveIncomes = incomes.reduce((acc, mov) => {
    return acc + mov;
  });

  labelSumIn.textContent = `$${addPositiveIncomes}`;

  const out = movements
    .filter((mov) => {
      return mov < 0;
    })
    .reduce((acc, mov) => {
      return acc + mov;
    });

  labelSumOut.textContent = `$${out}`;

  const interest = movements.filter((mov) => {
    return mov > 0;
  });

  const interestAmounts = interest
    .map((deposit) => {
      return (deposit * 1.2) / 100;
    })
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => {
      return acc + int;
    }, 0);

  labelSumInterest.textContent = `${interestAmounts}`;
};

calcDisplaySummary(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => {
        return name[0];
      })
      .join('');
  });
};

createUserNames(accounts);

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const euroToUSD = 1.1;

// const totalDepositsInUSD = movements
//   .filter((mov) => {
//     return mov > 0;
//   })
//   .map((mov) => {
//     return Math.trunc(mov * euroToUSD);
//   })
//   .reduce((acc, mov) => {
//     return acc + mov;
//     // if (a > b) {
//     //   return a;
//     // } else {
//     //   return b;
//     // }
//   }, 0);

// console.log(totalDepositsInUSD);

/////////////////////////////////////////////////

// const calcAverage = function (ages) {
//   ages
//     .map(function (age) {
//       return age <= 2 ? 2 * age : 16 + age * 4;
//     })
//     .filter(function (age) {
//       return age >= 18;
//     })
//     .reduce((accumulator, current) => {
//       return accumulator + current / 5;
//     }, 0);
//   // console.log(adultAverage);
// };
// console.log(humanAges);
// console.log(adults);

// console.log(calcAverage([5, 2, 4, 1, 15, 8, 3]));

const calcAverage = (ages) => {
  return ages
    .map((age) => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter((age) => {
      return age >= 18;
    })
    .reduce((acc, age, i, arr) => {
      return acc + age / arr.length;
    }, 0);
};

const avg1 = calcAverage([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverage([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);

// const calcAverage = function (ages) {
//   const humanAges = ages.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });
//   const adults = humanAges.filter(function (age) {
//     return age >= 18;
//   });
//   console.log(humanAges);
//   console.log(adults);

//   const adultAverage = adults.reduce((aumulator, current) => {
//     return accumulator + current / adults.length;
//   }, 0);
//   console.log(adultAverage);
// };

// calcAverage([5, 2, 4, 1, 15, 8, 3]);

// [5, 2, 4, 1, 15, 8, 3]
// [16, 6, 10, 5, 6, 1, 4]

/////////////////////////////////////////////////

// const balance = movements.reduce((accumulator, current, i, array) => {
//   console.log(`Iteration ${i + 1}: ${accumulator}`);
//   return accumulator + current;
// }, 0);

// console.log(balance);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

/////////////////////////////////////////////////

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdraws = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(movements);
// console.log(deposits);
// console.log(withdraws);

// movements.filter(function (mov, i) {
//   mov > 0
//     ? console.log(i + 1 + ':' + ' ' + '+')
//     : console.log(i + 1 + ':' + ' ' + '-');
// });

/////////////////////////////////////////////////

// const euroToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });

// console.log(movements);
// console.log(movementsUSD);

// const movementsForOf = [];
// for (const mov of movements) {
//   movementsForOf.push(Math.trunc(mov * euroToUSD));
//   console.log(movementsForOf);
// }

// const movementsDescription = movements.map((mov, i, arr) => {
//   // return mov > 0
//   //   ? `${i + 1}: You deposited ${mov}`
//   //   : `${i + 1}: You withdrew ${Math.abs(mov)}`;

//   return `${i + 1}: You deposited ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;

//   // if (mov > 0) {
//   //   return `${i + 1}. You deposited ${mov}`;
//   // } else {
//   //   return `${i + 1}. You withdrew ${Math.abs(mov)}`;
//   // }
// });

// console.log(movementsDescription);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog ${i + 1} is an adult, and is ${dog} years old `);
//     } else {
//       console.log(`Dog ${i + 1} is an puppy, and is ${dog} years old `);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // Splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// // Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(' - '));

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1}. You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1}. You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('');
// console.log('-----------------');
// console.log('');

// movements.forEach(function (mov, i, arr) {
//   mov > 0
//   ? console.log(`${i + 1}. You deposited ${mov}`)
//   : console.log(`${i + 1}. You withdrew ${Math.abs(mov)}`);
// });

/////////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

/////////////////////////////////////////////////

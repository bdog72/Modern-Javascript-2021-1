'use strict';

//
//
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [day[3]]: {
    // thursday
    open: 12,
    close: 22,
  },
  [day[4]]: {
    // friday
    open: 11,
    close: 23,
  },
  [day[5]]: {
    // saturday
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
  // console.log(baggage);
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// const email = 'bozo@bozo.com';
// const loginEmail = '  BoZo@Bozo.com \n';

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// if (email === normalizedEmail) {
//   console.log(`Good to go Bozo Boy`);
// }

// const priceGB = '288,97*';
// const priceUS = priceGB.replace('*', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'Hey bozo, you bozo';
// console.log(announcement.replaceAll('bozo', 'dork'));
// console.log(announcement.replace(/bozo/g, 'dork'));

// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));

// if (plane1.startsWith('Airbus') || plane1.endsWith('neo')) {
//   console.log(`Bozo`);
// }

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);

// const trimEmail = lowerEmail.trim();
// console.log(trimEmail);

// const compareStrings = email.localeCompare(trimEmail);
// console.log(email);

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();

// console.log(passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);
// console.log(plane[0]);

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);

//   if (s === 'B' || s === 'E') {
//     console.log(`You have a middle seat Bozo Boy`);
//   } else {
//     console.log(`You don't have a middle seat Bozo Boy`);
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//
//
let temp = 65;

if (temp >= 60 && temp <= 90) {
  console.log('Nice temp');
} else {
  console.log('Not nice temp');
}

if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside');
} else {
  console.log('Have at it bozo Boy');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer vegan choices');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Offer some vegan choices');
} else {
  console.log('Offer anything on Menu');
}

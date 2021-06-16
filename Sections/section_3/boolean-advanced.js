//
//

const { log } = require('console');

let isAccountLocked = false;
let userRole = 'user';

if (isAccountLocked) {
  console.log('Account Is Locked ');
} else if (userRole === 'admin') {
  console.log('Welcome Admin');
} else {
  console.log('Welcome');
}

let temp = 81;

if (temp <= 32) {
  console.log('It is Freezing outside');
} else if (temp >= 110) {
  console.log('It is Hot outside');
} else {
  console.log('Go for it, the weather is nice');
}

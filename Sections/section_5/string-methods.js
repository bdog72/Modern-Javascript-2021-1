//
//
let fullName = 'Brian Bycynski';
console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let password = 'abc123bozo098';
console.log(password.includes('password'));

function isValidPassword(password) {
  let passwordLength = password.length > 8;
  let passwordStrength = password.includes('password');
  if (passwordLength && !passwordStrength) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidPassword('abc123'));
console.log(isValidPassword('abc123def456'));
console.log(isValidPassword('abc123password'));

//
//

let firstName;
firstName = 'Jen';

if (firstName === undefined) {
  console.log('Please provide a Name');
} else {
  console.log(firstName);
}

let square = function (num) {
  console.log(num);
};

let result = square();
console.log(result);

let age = 27;
age = null;
console.log(age);

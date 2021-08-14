//
//
console.log(123);

const Person = function (firstName, birthYear, clown) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.clown = clown;
  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

const jonas = new Person('Bozo', 1991, true);
console.log(jonas);

const molly = new Person('Molly', 2012);
console.log(molly);

const josey = new Person('Josey', 2018);
console.log(josey);

jonas.calcAge();

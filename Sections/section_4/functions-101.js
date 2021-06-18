//
//

let greetUser = function () {
  console.log('Welcome Bozo');
};

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
console.log(value);

let value1 = square(10);
console.log(value1);

let convertFahreToCelsius = function (num) {
  let result = ((num - 32) * 5) / 9;
  return result;
};

let tempValue = convertFahreToCelsius(68);
console.log(tempValue);

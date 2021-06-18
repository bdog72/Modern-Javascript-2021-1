//
//
// let add = function (a, b, c) {
//   return a + b + c;
// };

// let result = add(10, 1, 5);
// console.log(result);

// let getScoreText = function (firstName = 'Molly', score = 0) {
//   return `Name: ${firstName} - Score: ${score}`;
// };

// let scoreText = getScoreText(undefined, 100);
// console.log(scoreText);

let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  let totalPlusTip = total + total * tipPercent;

  return `The bill was $${total} - The tip is $${tip} - Which is ${percent}% - The total bill including tip is $${totalPlusTip}`;
};

let result = getTip(200, 0.1);

console.log(result);

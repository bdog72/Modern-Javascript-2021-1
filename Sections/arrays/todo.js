//
//
console.log('------------------');

const todos = [
  'Walk the Dog',
  'Wash Car',
  'Grocery Shopping',
  'Drink Beer',
  'Smoke Weed',
];

console.log(`You have ${todos.length} todos`);
console.log(todos);

console.log(todos.splice(2, 1));
console.log(todos);

console.log(todos.push('Grocery Shopping'));
console.log(todos);

console.log(todos.shift());
console.log(todos);

console.log('------------------');

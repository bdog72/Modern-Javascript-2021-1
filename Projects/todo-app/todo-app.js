//
//

const h1 = document.querySelector('h1');

const todos = [
  { text: 'Walk the Dog', completed: true },
  { text: 'Wash Car', completed: false },
  { text: 'Grocery Shopping', completed: true },
  { text: 'Exercise', completed: false },
  { text: 'Drink Beer', completed: true },
  { text: 'Smoke Weed', completed: false },
];

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('.bozo').appendChild(summary);
// document.querySelector('body').appendChild(summary);

todos.forEach((todo) => {
  const p = document.createElement('p');
  p.textContent = todo.text;
  document.querySelector('.bozo').appendChild(p);
  // document.querySelector('body').appendChild(p);
});

document.querySelector('#add-todo').addEventListener('click', (e) => {
  console.log('Add a new todo...');
});

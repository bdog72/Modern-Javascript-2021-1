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

const filters = {
  searchText: '',
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach((todo) => {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
  });
};

renderTodos(todos, filters);

// Listen for todo creation
document.querySelector('#add-todo').addEventListener('click', (e) => {
  console.log('Add a new todo...');
});

// Listen for todo text change
document
  .querySelector('#new-todo-text')
  .addEventListener('input', function (e) {
    console.log(e.target.value);
  });

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

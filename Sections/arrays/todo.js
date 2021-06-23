//
//

const todos = [
  { text: 'Walk the Dog', completed: true },
  { text: 'Wash Car', completed: false },
  { text: 'Grocery Shopping', completed: true },
  { text: 'Exercise', completed: false },
  { text: 'Drink Beer', completed: true },
  { text: 'Smoke Weed', completed: false },
];

const sortTodos = (todos) => {
  todos.sort(function (a, b) {
    if (a.completed === false && b.completed === true) {
      return -1;
    } else if (b.completed === false && a.completed === true) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

function deleteTodo(todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
}

const getThingsTodo = function (todos) {
  return todos.filter(function (todo, index) {
    return !todo.completed;
  });
};

// console.log(getThingsTodo(todos));

// deleteTodo(todos, 'exercise');
// console.log(todos);

// todos.forEach(function (todo, index) {
//   const num = index + 1;
//   console.log(`${num}. ${todo}`);
// });

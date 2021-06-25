//
//

const notes = [
  {
    title: 'Note 1',
    body: 'Note Body 1',
  },
  {
    title: 'Note 2',
    body: 'Note Body 2',
  },
  {
    title: 'Note 3',
    body: 'Note Body 3',
  },
];

const filters = {
  searchText: '',
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'The Button was Clicked';
});

document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove();
  });
});

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

//
//

// const p = document.querySelector('p');
// p.remove();

const notes = [
  {
    title: 'bNote 3',
    body: 'Note Body 3 do',
  },
  {
    title: 'cNote 1',
    body: 'Note Body 1',
  },
  {
    title: 'aote 2 ne',
    body: 'Note Body 2 do',
  },
];

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'The Button was Clicked';
});

document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove();
  });
});

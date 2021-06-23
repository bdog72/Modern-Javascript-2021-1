//
//

// const notes = ['Note 1', 'Note 2', 'Note 3'];

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

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

sortNotes(notes);
console.log(notes);
// console.log(findNotes(notes, 'ne'));

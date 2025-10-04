let noteContainer = document.getElementById('display-notes');
let title = document.getElementById('title');
let content = document.getElementById('content');
let addNoteBtn = document.getElementById('add-note-btn');

let notes = [];

function addNote() {
    let card = document.createElement('div');
    card.id = 'card';
    let noteHeader = document.createElement('h3');
    let noteTitle = title.value;
    let noteParagraph = document.createElement('p');
    let noteContent = content.value;

    noteHeader.appendChild(noteTitle);
    noteParagraph.appendChild(noteContent);
    card.appendChild(noteHeader);
    card.appendChild(noteParagraph);
    noteContainer.appendChild(card);
}

addNoteBtn.addEventListener('click', addNote());


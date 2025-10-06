let noteContainer = document.getElementById('display-notes');
let title = document.getElementById('title');
let content = document.getElementById('content');
let addNoteBtn = document.getElementById('add-note-btn');
// document.title = 'My Page';
let notesArr = [];


function addNotes() {
    let notesObject = {
        "title": title.value,
        "content": content.value
    }

    let noteCard = document.createElement('div');
    noteCard.id = 'card';

    // Create header for the note card title
    let noteHeader = document.createElement('div');
    noteHeader.id = 'note-header';
    
    // get the title value
    let noteTitle = document.createElement('h3')
    noteTitle.textContent = notesObject["title"]; //Title Value
    
    // Create the edit button
    let editButton = document.createElement('button');
    editButton.innerText = "✏️";
    
    // Add an event listener to the edit button
    editButton.addEventListener('click', () => {
        title.value = notesObject['title'];
        content.value = notesObject['content'];
        noteCard.remove();
    });

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "🗑️";
    
    // Add an event listener to the edit button
    deleteButton.addEventListener('click', () => {noteCard.remove()});

    let noteButtons = document.createElement('div')
    noteButtons.appendChild(editButton)
    noteButtons.appendChild(deleteButton)

    noteButtons.id = 'note-buttons';
    
    noteHeader.appendChild(noteTitle)
    noteHeader.appendChild(noteButtons)
    
    // Create container for note content
    let noteContentContainer = document.createElement('div');
    noteContentContainer.id = 'note-content';
    let noteContent = notesObject["content"]; //Content Value
    noteContentContainer.textContent= noteContent;

    // get the date
    let dateContainer = document.createElement('p');
    dateContainer.innerText = addDate();
    dateContainer.id = 'date';

    if (title.value || content.value) {
        noteCard.appendChild(noteHeader);
        noteCard.appendChild(noteContentContainer);
        noteCard.appendChild(dateContainer);
        noteContainer.appendChild(noteCard);
    }
    title.value = '';
    content.value = '';
};

function addDate(){
    let now = new Date();
    let monthsArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
    let month = monthsArray[now.getMonth()];
    let dayDate = now.getDate();
    let year = now.getFullYear();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = days[now.getDay()];
    let message = `${day} ${month} ${dayDate}, ${year}`;
    return message
}


// noteContainer.innerHTML = notes;
addNoteBtn.addEventListener('click', addNotes);
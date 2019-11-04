import store from "./store/store";
import { addNote, deleteNote } from "./actions/actions";

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

console.log(`before action: `, store.getState());

// ------ Redux ------
function removeNote(id) {
    store.dispatch(deleteNote(id));
}

function renderNotes() {
    let notes = store.getState().notes;

    notesUList.innerHTML = '';
    notes.map((note, index) => {
        let noteItem = `
      <li>
        <b>${ note.title}</b>
        <button data-id="${ index}">x</button>
        <br />
        <span>${ note.content}</span>
      </li>
    `;
        notesUList.innerHTML += noteItem;
    });

    setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = addNoteTitle.value;
    const content = addNoteContent.value;
    store.dispatch(addNote(title, content));
    // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
    let buttons = document.querySelectorAll('ul#notes li button');

    for (let button of buttons) {
        button.addEventListener('click', () => {
            removeNote(button.dataset.id);
        });
    }
}

store.subscribe(
    () => renderNotes()
);

// ------ Render the initial Notes ------
renderNotes();
import { saveNote } from "./NoteProvider.js"

// Build the form to enter new notes

// Target the DOM element where we will enter notes by form
const contentTarget = document.querySelector(".note-input")

// create the form to enter notes
export const BuildNoteForm = () => {
    contentTarget.innerHTML = `
        <p>Write note here: <input type="text" id="note-text"></input>
        <p>Inmate Name for note: <input type="text" id="note-criminalName"></input>
        <button id="saveNote">Save Note</button>
    `
}

// listen for a click on note nav bar to show button for saving new notes
//document.querySelector("#notes-nav-link").addEventListener("click", () => {BuildNoteForm();});

// When save button is clicked for notes, save the note to local server
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        //console.log("You are trying to save a note")

        // Identify what the note text should be in the database
        let noteText = document.getElementById("note-text").value;
        //console.log(noteText)
        let noteCriminal = document.getElementById("note-criminalName").value;

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "text": noteText,
            "criminal": noteCriminal,
        }

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})
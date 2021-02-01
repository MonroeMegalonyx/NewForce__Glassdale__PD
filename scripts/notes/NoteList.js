// List all notes that exist in HTML

import { getNotes, useNotes } from "./NoteProvider.js";
import { stringNotes } from "./NoteString.js";

// Function to list all notes that exist on our local server, and erase other content on the page when notes are rendered
export const listNotes = () => {
    getNotes().then(() => {
        let notes = useNotes();
        let NotesAsHTMLString = "";

        for (let i = 0; i < notes.length; i++) {
            NotesAsHTMLString += stringNotes(notes[i]);
        }

        let criminalContainer = document.querySelector(".criminal-list");
        criminalContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        let alibiContainer = document.querySelector(".alibi-list");
        alibiContainer.innerHTML = ``;
        let noteContainer = document.querySelector(".note-list");
        noteContainer.innerHTML = `${NotesAsHTMLString}`;
    })
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    listNotes();
});

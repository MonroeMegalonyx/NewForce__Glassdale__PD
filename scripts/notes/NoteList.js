// List all notes that exist in HTML

import { getNotes, useNotes } from "./NoteProvider.js";
//import { stringNotes } from "./NoteString.js";
import { getCriminals, useCriminals } from "/scripts/criminals/CriminalProvider.js"

// New function to render the cirminals name by matching to the ID now saved in the json database. Copied from example but had to update criminalID case sensitive and use double == instead of ===
const render = (noteCollection, criminalCollection) => {
    document.querySelector(".note-list").innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id == note.criminalID)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

// Function to list all notes that exist on our local server, and erase other content on the page when notes are rendered
export const listNotes = () => {
    // NEW changes to link criminalID to the criminal name by pulling in criminal data this time too
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notes = useNotes();
        const criminals = useCriminals();
        //console.log(notes);
        //console.log(criminals);
        render(notes, criminals);
        // NEW changes to render the note card using criminal and note data and stopped using an HTML string component file
        //let NotesAsHTMLString = "";
        //for (let i = 0; i < notes.length; i++) {
        //    NotesAsHTMLString += stringNotes(notes[i]);
        //}

        let criminalContainer = document.querySelector(".criminal-list");
        criminalContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        let alibiContainer = document.querySelector(".alibi-list");
        alibiContainer.innerHTML = ``;
        // Keeping the erasing functions above but changing the noteContainer to be written using the render function above now
        //let noteContainer = document.querySelector(".note-list");
        //noteContainer.innerHTML = `${NotesAsHTMLString}`;
    })
}

// List the notes when picked in the navigation bar
document.querySelector("#notes-nav-link").addEventListener("click", () => {
    listNotes();
});

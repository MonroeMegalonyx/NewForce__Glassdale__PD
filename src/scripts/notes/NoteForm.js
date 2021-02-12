import { saveNote } from "./NoteProvider.js";
import { getCriminals, useCriminals } from "/scripts/criminals/CriminalProvider.js";
import { listNotes } from "./NoteList.js"
// Build the form to enter new notes

// Target the DOM element where we will enter notes by form
const contentTarget = document.querySelector(".note-input")
// NEW Added this function to build the array of criminals in dropdown and then add that to the note form input. Modified from officer selection file
export const CriminalNoteSelect = () => {
    // Get all officers from application state
    getCriminals().then(() => {
        const criminalsArray = useCriminals();
        BuildNoteForm(criminalsArray);
    });
};

// SOME NEW create the form to enter notes, adding a parameter for the array of criminals to make criminal dropdown box
export const BuildNoteForm = (criminalsCollection) => {
    contentTarget.innerHTML = `
        <p>Write your note here: <input placeholder="Enter note" type="text" id="note-text"></input></p>
        <p><select class="dropdown" id="criminalSelect">
            <option>You must select a criminal for this note</option></p>
            ${criminalsCollection.map((currentCriminalinLoop) => {
                return `<option value="${currentCriminalinLoop.id}">${currentCriminalinLoop.name}</option>`;
            })}
        </select>
        <button id="saveNote">Save Note</button>

    `    
        // Removing the text box to write a criminal name and adding a dropdown to select actual criminal for database integrity
        //<p>Inmate Name for note: <input type="text" id="note-criminalName"></input>
    
}

// listen for a click on note nav bar to show button for saving new notes
//document.querySelector("#notes-nav-link").addEventListener("click", () => {BuildNoteForm();});

// NEW add event listener to save the value of the criminal selected in note form. Define the variable outside the event or conditional, then set value when a criminal is selected
let criminalSelectedID = ""; 

const eventHub = document.querySelector("body");
eventHub.addEventListener("change", (eventObject) => {
if (eventObject.target.id === "criminalSelect") {
        console.log("You selected something from the criminal dropdown, ID="+eventObject.target.value);
        criminalSelectedID = eventObject.target.value
    };
    console.log(criminalSelectedID)});

// When save button is clicked for notes, save the note to local server
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        //console.log("You are trying to save a note")
        // Check to see if the criminalID is saved and reachable
        console.log("This is the criminal who was selected:"+criminalSelectedID)
        // Identify what the note text should be in the database
        let noteInput = document.getElementById("note-text").value;
        //console.log(noteText)
        // NEW changing this to get id of criminal from dropdown instead of user writing in name
        //let noteCriminal = document.getElementById("note-criminalName").value;
        let noteCriminalID = criminalSelectedID
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "noteText": noteInput,
            //"criminal": noteCriminal,
            // Changing the criminal name to criminal ID for database chapter
            "criminalID": noteCriminalID,

        }
        // Change API state and application state
        saveNote(newNote)
        .then(listNotes()) // Refresh your list of notes once you've saved your new one
    }
})
//import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

//getCriminals();
//useCriminals();

import {} from "./criminals/CriminalList.js";
import {} from "./officers/OfficerList.js";
import {} from "./facilities/FacilityList.js";
import {} from "./notes/NoteList.js";


//const darkModeButton = document.querySelector("#dark-mode");

//darkModeButton.addEventListener("click", function () {
// Select the entire body tag
//    const bodyElement = document.querySelector("body");

// Add a class
//    bodyElement.classList.toggle("dark-background");
//});

// Added event listener to make nav bar print contents from JS when user clicks instead of using static HTML
// document.querySelector("#criminals-nav-link").addEventListener("click", () => {
//    listCriminals()
// });

//import dropdown menus
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";

ConvictionSelect();

import { OfficerSelect } from "./officers/OfficerSelect.js";

OfficerSelect();

// import event listener to make button and save notes
// or just run it so input exists all the time
import { CriminalNoteSelect } from "./notes/NoteForm.js";
// Instead of building the note, we changed to building the note with a dropdown of the criminal array, so run function that builds the criminal array and then runs that through BuildNoteForm automatically
//BuildNoteForm()
CriminalNoteSelect()

//Import for event listener when alibi button clicked
import {} from "./alibis/AlibiList.js";


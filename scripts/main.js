//import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

//getCriminals();
//useCriminals();

import { listCriminals } from "./criminals/CriminalList.js";
//listCriminals();
import { listOfficers } from "./officers/OfficerList.js";
import { listFacilities } from "./facilities/FacilityList.js";

const darkModeButton = document.querySelector("#dark-mode");

darkModeButton.addEventListener("click", function () {
    // Select the entire body tag
    const bodyElement = document.querySelector("body");

    // Add a class
    bodyElement.classList.toggle("dark-background");
});

// Added event listener to make nav bar print contents from JS when user clicks instead of using static HTML
// document.querySelector("#criminals-nav-link").addEventListener("click", () => {
//    listCriminals()
// });

import { ConvictionSelect } from "./convictions/ConvictionSelect.js";

ConvictionSelect()

import { OfficerSelect } from "./officers/OfficerSelect.js";

OfficerSelect()
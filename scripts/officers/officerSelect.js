/*
 *   OfficerSelect component that renders a select HTML element
 *   which lists all officers in the Glassdale PD API
 */
import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { listCriminals, listFilteredCriminals } from "/scripts/criminals/CriminalList.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".officer-dropdown");

export const OfficerSelect = () => {
    // Get all officers from application state
    getOfficers().then(() => {
        const officersArray = useOfficers();
       // console.log(officersArray);
        render(officersArray);
    });
};

const render = (officersCollection) => {
    /*
        Use interpolation here to invoke the map() method on
        the officersCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an arresting officer...</option>
            ${officersCollection.map((currentOfficerinLoop) => {
                //console.log(currentOfficerinLoop.name)
                return `<option>${currentOfficerinLoop.name}</option>`
            })}
        </select>
    `;
};

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    //console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    //console.log("Here is the element you clicked on:",eventObject.target)

    if(event.target.id === "officerSelect"){
        console.log("You selected something from the officer dropdown")
        console.log("This is the officer who was selected:",eventObject.target.value)
        /*
        - When we select a crime, we need to filter the officers in OfficerList.
        - Start by importing the OfficerList component at the top of this file.
        - Then call OfficerList, and pass in information about the crime that was chosen
        */
       listFilteredCriminals(null, eventObject.target.value);
    }
})
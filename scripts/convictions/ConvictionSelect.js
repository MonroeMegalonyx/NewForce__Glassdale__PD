/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js";
import {
    listCriminals,
    listFilteredCriminals,
} from "/scripts/criminals/CriminalList.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".conviction-dropdown");

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
        const convictionsArray = useConvictions();
        // console.log(convictionsArray);
        render(convictionsArray);
    });
};

const render = (convictionsCollection) => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map((currentCovictioninLoop) => {
                //console.log(currentCovictioninLoop.name)
                return `<option>${currentCovictioninLoop.name}</option>`;
            })}
        </select>
    `;
};

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body");
eventHub.addEventListener("change", (eventObject) => {
    // console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    // console.log("Here is the element you clicked on:",eventObject.target)

    if (eventObject.target.id === "crimeSelect") {
        console.log("You selected something from the crime dropdown");
        console.log(
            "This is the crime that was selected:",
            eventObject.target.value
        );
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
        listFilteredCriminals(eventObject.target.value, null);
    } //add conditional for officer select to reset this dropdown if an officer is selected. This is just the exact same code as above, and reset the menu by running convictionselect() with everything defined since its inside another function here.
    if (eventObject.target.id === "officerSelect") {
        // Get a reference to the DOM element where the <select> will be rendered
        const contentTarget = document.querySelector(".conviction-dropdown");

        const ConvictionSelect = () => {
            // Get all convictions from application state
            getConvictions().then(() => {
                const convictionsArray = useConvictions();
                // console.log(convictionsArray);
                render(convictionsArray);
            });
        };

        const render = (convictionsCollection) => {
            contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map((currentCovictioninLoop) => {
                //console.log(currentCovictioninLoop.name)
                return `<option>${currentCovictioninLoop.name}</option>`;
            })}
        </select>
    `;
        };
        ConvictionSelect();
    }
});

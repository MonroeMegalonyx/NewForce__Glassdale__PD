/*
 *   AlibiSelect component that renders a select HTML element
 *   which lists all associates and alibis in the Glassdale PD API for given criminal
 */
import { getAssociates } from "./AlibiProvider.js";

// Event listener to find button when clicked under criminals
let eventHub = document.querySelector("body");
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.includes("associates--")) {
        //this is what code runs when user clicks the Associates button at bottom of criminal card
        console.log(
            "You pushed a Known Associates button for:",
            eventObject.target.id
        );
        // filter to get the criminal id, then give that to the associates functon to log the alibis
        let buttonIDArray = eventObject.target.id.split("--");
        //console.log("test",buttonIDArray);
        let clickedCriminalID = buttonIDArray[1];
        console.log("ID of criminal is",clickedCriminalID);
        let Alibis = getAssociates(clickedCriminalID);
        console.log(Alibis);
    }
});

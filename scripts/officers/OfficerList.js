import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { stringOfficers } from "./OfficerString.js";

let officerContainer = document.querySelector(".officer-list");

export const listOfficers = () => {
    // Extra step to first fetch all the data and saving it use getOfficers function, then possible to use it like earlier examples
    getOfficers().then(() => {
        let officers = useOfficers();
        let OfficersAsHTMLString = "";

        for (let i = 0; i < officers.length; i++) {
            OfficersAsHTMLString += stringOfficers(officers[i]);
        }

        //console.log(OfficersAsHTMLString);
        officerContainer.innerHTML = `${OfficersAsHTMLString}`;
    });
};

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    listOfficers();
});
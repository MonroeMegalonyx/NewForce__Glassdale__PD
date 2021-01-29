import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { stringOfficers } from "./OfficerString.js";

export const listOfficers = () => {
    // Extra step to first fetch all the data and saving it use getOfficers function, then possible to use it like earlier examples
    getOfficers().then(() => {
        let officers = useOfficers();
        let OfficersAsHTMLString = "";

        for (let i = 0; i < officers.length; i++) {
            OfficersAsHTMLString += stringOfficers(officers[i]);
        }

        //console.log(OfficersAsHTMLString);
        // get all containers for menu values and set to empty on each click. This renders only the new click content each time.
        let criminalContainer = document.querySelector(".criminal-list");
        criminalContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        //officerContainer.innerHTML = ``;
        officerContainer.innerHTML = `${OfficersAsHTMLString}`;
        let alibiContainer = document.querySelector(".alibi-list");
        alibiContainer.innerHTML = ``;
    });
};

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    listOfficers();
});

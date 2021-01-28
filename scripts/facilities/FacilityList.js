import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { stringFacilities } from "./FacilityString.js";

//let facilityContainer = document.querySelector(".facility-list");

export const listFacilities = () => {
    // Extra step to first fetch all the data and saving it use getCriminals function, then possible to use it like earlier examples
    getFacilities().then(() => {
        let facilities = useFacilities();
        let FacilitiesAsHTMLString = "";

        for (let i = 0; i < facilities.length; i++) {
            FacilitiesAsHTMLString += stringFacilities(facilities[i]);
        }

        //console.log(FacilitiesAsHTMLString);
        // get all containers for menu values and set to empty on each click. This renders only the new click content each time.
        let criminalContainer = document.querySelector(".criminal-list");
        criminalContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        //facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        facilityContainer.innerHTML = `${FacilitiesAsHTMLString}`;
    });
};

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    listFacilities();
});

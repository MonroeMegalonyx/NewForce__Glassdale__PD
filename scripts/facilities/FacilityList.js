import { getFacilities, useFacilities } from './FacilityProvider.js';
import { stringFacilities } from './FacilityString.js';

let facilityContainer = document.querySelector(".facility-list");

export const listFacilities = () => {
    // Extra step to first fetch all the data and saving it use getCriminals function, then possible to use it like earlier examples
    getFacilities().then(() => {
        let facilities = useFacilities();
        let FacilitiesAsHTMLString = "";

        for (let i = 0; i < facilities.length; i++) {
            FacilitiesAsHTMLString += stringFacilities(facilities[i]);
        }

        console.log(FacilitiesAsHTMLString);
        facilityContainer.innerHTML = `${FacilitiesAsHTMLString}`;
    })
};

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
  listFacilities()
});

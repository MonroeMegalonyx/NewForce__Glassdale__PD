import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { stringCriminals } from "./CriminalString.js";

//function to list all criminals, called when clicking the criminal tab in menu bar
export const listCriminals = () => {
    //    let criminalContainer = document.querySelector(".criminal-list");
    //    criminalContainer.innerHTML = ``;

    // Extra step to first fetch all the data and saving it use getCriminals function, then possible to use it like earlier examples
    getCriminals().then(() => {
        let criminals = useCriminals();
        let CriminalsAsHTMLString = "";

        //console.table(criminals);

        for (let i = 0; i < criminals.length; i++) {
            CriminalsAsHTMLString += stringCriminals(criminals[i]);
        }

        //console.log(CriminalsAsHTMLString);

        // get all containers for menu values and set to empty on each click. This renders only the new click content each time.
        let criminalContainer = document.querySelector(".criminal-list");
        //criminalContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        criminalContainer.innerHTML = `${CriminalsAsHTMLString}`;
        let alibiContainer = document.querySelector(".alibi-list");
        alibiContainer.innerHTML = ``;
        let noteContainer = document.querySelector(".note-list");
        noteContainer.innerHTML = ``;
    });
};

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    listCriminals();
});

//function to filter criminals by crime given as parameter and then list only those criminals
export const listFilteredCriminals = (convictionFilter, officerFilter) => {
    //let criminalContainer = document.querySelector(".criminal-list");

    // get all containers for menu values and set to empty on each click. This renders only the new click content each time.
    let criminalContainer = document.querySelector(".criminal-list");
    criminalContainer.innerHTML = ``;
    let facilityContainer = document.querySelector(".facility-list");
    facilityContainer.innerHTML = ``;
    let officerContainer = document.querySelector(".officer-list");
    officerContainer.innerHTML = ``;
    let alibiContainer = document.querySelector(".alibi-list");
        alibiContainer.innerHTML = ``;

    //function to get list of criminals then filter them by crime
    getCriminals().then(() => {
        let criminals = useCriminals();

        // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
        //if (convictionFilter) {
        //    criminals =  // write your filter here
        //}

        const filteredByConviction = criminals.filter(
            (criminalObject) => criminalObject.conviction === convictionFilter
        );
        console.log(filteredByConviction);

        filteredByConviction.forEach((singleCriminal) => {
            criminalContainer.innerHTML += stringCriminals(singleCriminal);
        });

        const filteredByArrestingOfficer = criminals.filter(
            (criminalObject) =>
                criminalObject.arrestingOfficer === officerFilter
        );
        console.log(filteredByArrestingOfficer);

        filteredByArrestingOfficer.forEach((singleCriminal) => {
            criminalContainer.innerHTML += stringCriminals(singleCriminal);
        });
    });
};

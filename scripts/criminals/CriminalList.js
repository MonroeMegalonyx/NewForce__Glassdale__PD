import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { stringCriminals } from "./CriminalString.js";
//function to list all criminals, called when clicking the criminal tab in menu bar
 export const listCriminals = () => {
    let criminalContainer = document.querySelector(".criminal-list");

    // Extra step to first fetch all the data and saving it use getCriminals function, then possible to use it like earlier examples
    getCriminals().then(() => {
        let criminals = useCriminals();
        let CriminalsAsHTMLString = "";

         //console.table(criminals);

         for (let i = 0; i < criminals.length; i++) {
            CriminalsAsHTMLString += stringCriminals(criminals[i]);
        }

         console.log(CriminalsAsHTMLString);
        criminalContainer.innerHTML = `${CriminalsAsHTMLString}`;
    });
};

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    listCriminals();
});

//function to filter criminals by crime given as parameter and then list only those criminals
export const listFilteredCriminals = (convictionFilter) => {
    let criminalContainer = document.querySelector(".criminal-list");
//function to get list of criminals then filter them by crime
    getCriminals().then(() => {
        let criminals = useCriminals();

        // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
        //if (convictionFilter) {
        //    criminals =  // write your filter here
        //} 

        const specificCriminals = criminals.filter(criminalObject => criminalObject.conviction === convictionFilter)
        console.log(specificCriminals)

        specificCriminals.forEach((singleCriminal) => {
           criminalContainer.innerHTML += stringCriminals(singleCriminal);
        });
    });
};


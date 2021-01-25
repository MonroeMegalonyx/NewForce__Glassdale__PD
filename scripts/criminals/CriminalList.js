import { getCriminals, useCriminals } from './CriminalProvider.js';
import { stringCriminals } from './CriminalString.js';

let criminalContainer = document.querySelector(".criminal-list");

export const listCriminals = () => {
    // Extra step to first fetch all the data and saving it use getCriminals function, then possible to use it like earlier examples
    getCriminals().then(() => {
        let criminals = useCriminals();
        let CriminalsAsHTMLString = "";

        for (let i = 0; i < criminals.length; i++) {
            CriminalsAsHTMLString += stringCriminals(criminals[i]);
        }

        console.log(CriminalsAsHTMLString);
        criminalContainer.innerHTML = `${CriminalsAsHTMLString}`;
    })
}
// import and use criminal array functions to get data on criminals, then run a function to find the alibi data for a specific criminal

import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

// function to filter known associates of a criminal
export function getAssociates(singleCriminalID) {
    //make criminal array
    getCriminals().then(() => {
        let criminals = useCriminals();
        let associatesArray = [];
        console.log(associatesArray);
        //console.log("tester tester original array", criminals);
        //loop through array, find the criminal by ID, and return the associate array
        for (var i = 0; i < criminals.length; i++) {
            if (criminals[i].id == singleCriminalID) {
                console.log("Known Associates of Selected Criminal #",singleCriminalID,criminals[i].known_associates);
                associatesArray = criminals[i].known_associates;
            }
        }
        console.log("Take 2",associatesArray);
        return associatesArray;
    });
};

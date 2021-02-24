import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { stringCriminals } from "./CriminalString.js";
import { getCriminalFacilities, useCriminalFacilities } from "/scripts/facilities/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "/scripts/facilities/FacilityProvider.js"

// //function to list all criminals, called when clicking the criminal tab in menu bar
// export const listCriminals = () => {
//     //    let criminalContainer = document.querySelector(".criminal-list");
//     //    criminalContainer.innerHTML = ``;

//     // Extra step to first fetch all the data and saving it use getCriminals function, then possible to use it like earlier examples
//     getCriminals().then(() => {
//         let criminals = useCriminals();
//         let CriminalsAsHTMLString = "";

//         //console.table(criminals);

//         for (let i = 0; i < criminals.length; i++) {
//             CriminalsAsHTMLString += stringCriminals(criminals[i]);
//         }

//         //console.log(CriminalsAsHTMLString);

//         // get all containers for menu values and set to empty on each click. This renders only the new click content each time.
//         let criminalContainer = document.querySelector(".criminal-list");
//         //criminalContainer.innerHTML = ``;
//         let facilityContainer = document.querySelector(".facility-list");
//         facilityContainer.innerHTML = ``;
//         let officerContainer = document.querySelector(".officer-list");
//         officerContainer.innerHTML = ``;
//         criminalContainer.innerHTML = `${CriminalsAsHTMLString}`;
//         let alibiContainer = document.querySelector(".alibi-list");
//         alibiContainer.innerHTML = ``;
//         let noteContainer = document.querySelector(".note-list");
//         noteContainer.innerHTML = ``;
//         // Hide the notes button
//         document.querySelector(".note-input").innerHTML = "";
//     });
// };

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

// New code for practice many to many relationships
export const listCriminals = () => {
    
    let criminalContainer = document.querySelector(".criminal-list");
    criminalContainer.innerHTML = ``;
    let facilityContainer = document.querySelector(".facility-list");
    facilityContainer.innerHTML = ``;
    let officerContainer = document.querySelector(".officer-list");
    officerContainer.innerHTML = ``;
    let alibiContainer = document.querySelector(".alibi-list");
        alibiContainer.innerHTML = ``;
        
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    document.querySelector(".criminal-list").innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}

export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h4>All Facilities connected to</h4>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}
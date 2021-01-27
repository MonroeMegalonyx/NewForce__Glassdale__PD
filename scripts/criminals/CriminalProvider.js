// Defining the array of criminals locally - empty until we fetch from API
let criminals = [];

// Create function to return criminal data once it exists, used in earlier examples
export const useCriminals = () => {
    return criminals.slice();
};

// Create function to fetch the criminal data from the API and save it as the criminal array locally we are used to working with
export const getCriminals = (convictionVariable) => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then((response) => response.json())
        .then((parsedCriminals) => {
            //console.table(parsedCriminals);
            criminals = parsedCriminals;
        });
};

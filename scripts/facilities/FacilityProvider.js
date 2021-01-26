// Defining the array of criminals locally - empty until we fetch from API
let facilities = []

// Create function to return criminal data once it exists, used in earlier examples
export const useFacilities = () => {
    return facilities.slice()
}

// Create function to fetch the criminal data from the API and save it as the criminal array locally we are used to working with
export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(response => response.json())
        .then(
            parsedFacilities => {
                console.table(parsedFacilities)
                facilities = parsedFacilities
            }
        )
}
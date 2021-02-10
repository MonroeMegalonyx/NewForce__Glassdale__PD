let convictions = [];

export const useConvictions = () => convictions.slice();

export const getConvictions = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.

        Finished this example in joint class programming
    */

    return fetch("https://criminals.glassdale.us/crimes")
        .then((r) => r.json())
        .then((convictionFromAPI) => {
            convictions = convictionFromAPI;
        });
};

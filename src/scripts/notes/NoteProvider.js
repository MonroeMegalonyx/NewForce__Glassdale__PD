// building our notes array and functions as any other section

let notes = [];

export const useNotes = () => {
    return notes.slice();
};

// when getNotes() is used, we are pulling from the local server but with same code logic
export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

};

// NEW with notes we can save new notes to the database instead of just pulling down data. This function writes a note back to the local server
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes) // After we add a note, get them all again so our new note appears in our collection
};

// NEW NEW adding a delete call to delete notes from the local server
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
}
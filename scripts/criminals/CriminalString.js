export function stringCriminals(criminalObject) {
    return `
    <div class = "criminal-list__person item-container">
      <h2>${criminalObject.name}</h2>
      <p>Age: ${criminalObject.age}</p>
      <p>Crime: ${criminalObject.conviction}</p>
      <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
      <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
      <button id="associates--${criminalObject.id}">Known Associates</button>
    </div>`;
}

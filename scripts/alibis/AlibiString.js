export function stringAssociates(associateObject) {
    return `
    <div class = "alibi-list__person item-container">
      <h2>Associate: ${associateObject.name}</h2>
      <p>Given Alibi: ${associateObject.alibi}</p>
    </div>`;
}

export function stringFacilities(facilityObject) {
    return `
    <div class = "facility-list__place item-container">
      <h2>${facilityObject.facilityName}</h2>
      <p>Security Level: ${facilityObject.securityLevel}</p>
    </div>`;
}

import API from "./apiCalls"
import DOM from "./domStructure"

console.log("hey")
API.getPointsOfInterest().then(response => DOM.renderComponents(response))
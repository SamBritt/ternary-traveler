import API from "./apiCalls"
import DOM from "./domStructure"

console.log("hey")
DOM.buildInterestForm();
API.getPointsOfInterest().then(response => DOM.renderComponents(response))
import API from "./apiCalls"
import DOM from "./domStructure"

DOM.buildInterestForm();
API.getPointsOfInterest().then(response => DOM.renderComponents(response))
import DOM from "./domStructure"
import API from "./apiCalls"

const events = {
    handleSave() {
        let nameInput = document.getElementById("nameInput")
        let costInput = document.getElementById("costInput")
        let descInput = document.getElementById("descInput")
        let revInput = document.getElementById("revInput")
        let select = document.querySelector("select");
        let selectValues = select.options[select.selectedIndex].value;

        let interestToPost = {
            "placeId": Number(selectValues),
            "name": nameInput.value,
            "description": descInput.value,
            "cost": costInput.value,
            "review": revInput.value
        }
        API.postPoint(interestToPost).then(() => API.getPointsOfInterest()).then(r => DOM.renderComponents(r))
    }
}

export default events
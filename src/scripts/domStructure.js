import builder from "./elementBuilder"

const domStructure = {
    makeInterestComponent(obj) {
        let section = builder("section", undefined, undefined, `interest--${obj.id}`)
        section.appendChild(builder("h1", undefined, undefined, undefined, `${obj.name}`))
        obj.interests.forEach(e => {
            section.appendChild(builder("h3", undefined, undefined, undefined, `Name: ${e.name}`))
            section.appendChild(builder("div", undefined, undefined, undefined, `Description: ${e.description}`))
            section.appendChild(builder("div", undefined, undefined, undefined, `Cost: $${e.cost}`))
            section.appendChild(builder("div", undefined, undefined, undefined, `Review: ${e.review}`))
        })

        return section;
    },
    buildInterestForm() {
        let docFrag = document.createDocumentFragment();
        const nameLabel = builder("label", undefined, undefined, undefined, "Name: ")
        docFrag.appendChild(nameLabel)
        docFrag.appendChild(builder("input", "text", undefined, "nameInput"))
        ////
        const costLabel = builder("label", undefined, undefined, undefined, "Cost: ")
        docFrag.appendChild(costLabel)
        docFrag.appendChild(builder("input", "text", undefined, "costInput"))
        ////
        const descLabel = builder("label", undefined, undefined, undefined, "Description: ")
        docFrag.appendChild(descLabel)
        docFrag.appendChild(builder("input", "text", undefined, "descInput"))
        ////
        let saveButton = builder("button", "button", undefined, "saveButton", "Save")
        saveButton.addEventListener("click", () => console.log("hello"))
    },
    renderComponents(obj) {
        let docFrag = document.createDocumentFragment()
        obj.forEach(element => {
            docFrag.appendChild(this.makeInterestComponent(element))
        });
        document.getElementById("display-container").appendChild(docFrag)
    }
}

export default domStructure
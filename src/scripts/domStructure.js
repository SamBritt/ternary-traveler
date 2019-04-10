import builder from "./elementBuilder"
import handler from "./eventHandler"

const domStructure = {
    makeInterestComponent(obj) {
        let section = builder.builder("section", undefined, undefined, `interest--${obj.id}`)
        section.appendChild(builder.builder("h1", undefined, undefined, undefined, `${obj.name}`))
        obj.interests.forEach(e => {
            section.appendChild(builder.builder("h3", undefined, undefined, undefined, `Name: ${e.name}`))
            section.appendChild(builder.builder("div", undefined, undefined, undefined, `Description: ${e.description}`))
            section.appendChild(builder.builder("div", undefined, undefined, undefined, `Cost: $${e.cost}`))
            section.appendChild(builder.builder("div", undefined, undefined, undefined, `Review: ${e.review}`))
        })

        return section;
    },
    buildInterestForm() {
        let docFrag = document.createDocumentFragment();
        const nameLabel = builder.builder("label", undefined, undefined, undefined, "Name: ")
        docFrag.appendChild(nameLabel)
        docFrag.appendChild(builder.builder("input", "text", undefined, "nameInput"))
        ////
        const costLabel = builder.builder("label", undefined, undefined, undefined, "Cost: ")
        docFrag.appendChild(costLabel)
        docFrag.appendChild(builder.builder("input", "text", undefined, "costInput"))
        ////
        const descLabel = builder.builder("label", undefined, undefined, undefined, "Description: ")
        docFrag.appendChild(descLabel)
        docFrag.appendChild(builder.builder("input", "text", undefined, "descInput"))
        ////
        let select = builder.builder("select");
        let selectOptions = ["Hong Kong", "Toyko", "Shanghai"];
        for(let i = 0; i < selectOptions.length; i++){
            let option = builder.builder("option", undefined, i + 1, undefined, selectOptions[i]);
            select.appendChild(option)
        }
        docFrag.appendChild(select)
        ////
        let saveButton = builder.builder("button", "button", undefined, "saveButton", "Save")
        saveButton.addEventListener("click", (handler.handleSave))
        docFrag.appendChild(saveButton);
        document.getElementById("display-container").appendChild(docFrag)
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
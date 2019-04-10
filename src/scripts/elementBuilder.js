let builder = (element, eType, eValue, eId, eText)  => {
    let newElement = document.createElement(element);

    if(eType){
        newElement.setAttribute("type", eType)
    }
    if(eValue){
        newElement.setAttribute("value", eValue)
    }
    if(eId){
        newElement.setAttribute("id", eId)
    }
    if(eText){
        newElement.textContent = eText
    }
    return newElement;
}

export default builder
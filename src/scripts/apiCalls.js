import struct from "./domStructure"

const apiURL = "http://localhost:8088";

const API = {
    getPointsOfInterest(){
        return fetch(`${apiURL}/places?_embed=interests`)
            .then(r => r.json())
    }
    // postPoint(parentId){
    //     return fetch(`${apiURL}/interests?_expand=place`)
    // }
}

export default API
import struct from "./domStructure"

const apiURL = "http://localhost:8088";

const API = {
    getPointsOfInterest(){
        return fetch(`${apiURL}/places?_embed=interests`)
            .then(r => r.json())
    },
    postPoint(entry){
        return fetch(`${apiURL}/interests`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}

export default API
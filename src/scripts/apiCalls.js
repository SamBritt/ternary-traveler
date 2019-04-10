const apiURL = "http://localhost:8088";

const API = {
    getPointsOfInterest(){
        return fetch(`${apiURL}/interests`)
            .then(r => r.json())
    }
}

export default API
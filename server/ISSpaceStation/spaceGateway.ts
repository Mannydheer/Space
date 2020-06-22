const fetch = require("isomorphic-fetch");


export const currentIssPositionGateway = async () => {
    return await fetch("http://api.open-notify.org/iss-now.json")
}
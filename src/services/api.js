const axios = require("axios");
debugger
import references from "./references";

const webUrl = window.location.href;
let env;

if (webUrl.includes("localhost")) {
  env = "local";
} else {
  env = "prod";
}

const getMethod = async (api, route, body) => {
    debugger;
    axios.default.baseURL = references[api][env]
    var response = await axios.get(`${references[api][env]}/${route}`, body)
    return response
}

const postMethod = async (api, route, body) => {
    axios.default.baseURL = references[api][env]
    var response = await axios.post(`${references[api][env]}/${route}`, body)
    return response
}

export default {
    get: getMethod,
    post: postMethod
}
const axios = require("axios");
import references from "./references";

const webUrl = window.location.href;
let env;

if (webUrl.includes("localhost")) {
  env = "local";
} else if (webUrl.includes("prod")) {
  env = "prod";
}

const getMethod = async (apiName, route, body) => {
    axios.default.baseURL = references[apiName][env]
    var response = await axios.get(route, body)
    return response
}

const postMethod = async (apiName, route, body) => {
    axios.default.baseURL = references[apiName][env]
    var response = await axios.post(route, body)
    return response
}

export default {
    get: getMethod,
    post: postMethod
}
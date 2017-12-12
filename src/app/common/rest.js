import reqwest from "reqwest";

const client_id = "USWHH1RRQBNF4JGMMA0J2OTG3QRFFHH0QZBETTM4MQGOUXZ5";
const client_secret = "CQMZTIOMZU2IYCHXN0OFSNDBHWLWM4ALFQGYK3EFK3WPEDOD";
const cogent_address = "35.649065, 139.702237";

const CROSS_ORIGIN_KEY = "crossOrigin";
const METHOD_KEY = "method";
const TYPE_KEY = "type";

const JSON_VALUE = "json";
const GET = "GET";

const curent_date = new Date().toLocaleDateString().split("/").reverse().join("");

class Rest {

    doGet(link, id) {
        const url = `${link}/${id ? id : ""}?ll=${cogent_address}&client_id=${client_id}&client_secret=${client_secret}&v=${curent_date}&radius=1000`;
        const requestOptions = {
            url,
            [TYPE_KEY]: JSON_VALUE,
            [METHOD_KEY]: GET,
            [CROSS_ORIGIN_KEY]: process.env.NODE_ENV !== "production"
        };
        return reqwest(requestOptions);
    }

    doSearch(link, query) {
        const url = `${link}?query=${query}&ll=${cogent_address}&client_id=${client_id}&client_secret=${client_secret}&v=${curent_date}&radius=1000`;
        const requestOptions = {
            url,
            [TYPE_KEY]: JSON_VALUE,
            [METHOD_KEY]: GET,
            [CROSS_ORIGIN_KEY]: process.env.NODE_ENV !== "production"
        };
        return reqwest(requestOptions);
    }
}

export default new Rest();

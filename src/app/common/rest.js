import reqwest from "reqwest";

const client_id = "USWHH1RRQBNF4JGMMA0J2OTG3QRFFHH0QZBETTM4MQGOUXZ5";
const client_secret = "CQMZTIOMZU2IYCHXN0OFSNDBHWLWM4ALFQGYK3EFK3WPEDOD";

const ACCEPT_KEY = "Accept";
const CONTENT_TYPE_KEY = "Content-Type";
const CROSS_ORIGIN_KEY = "crossOrigin";
const HEADERS_KEY = "headers";
const METHOD_KEY = "method";
const TYPE_KEY = "type";
const CLIENT_ID = "CLIENT_ID";
const CLIENT_SECRET = "CLIENT_SECRET";
const LL = "LL";
const QUERY_STRING = "QS";
const QUERY = "QUERY";
const LIMIT = "LIMIT";

const APPLICATION_JSON = "application/json";
const JSON_VALUE = "json";
const POST = "POST";

class Rest {

    doPost(url, data) {
        const requestOptions = {
            url,
            [TYPE_KEY]: JSON_VALUE,
            [METHOD_KEY]: POST,
            [CROSS_ORIGIN_KEY]: process.env.NODE_ENV !== "production",
            [HEADERS_KEY]: {
                [ACCEPT_KEY]: APPLICATION_JSON,
                [CONTENT_TYPE_KEY]: APPLICATION_JSON
            },
            [QUERY_STRING]: {
                [CLIENT_ID]: client_id,
                [CLIENT_SECRET]: client_secret,
                [LL]: "40.7243,-74.0018",
                [QUERY]: "coffee",
                v: "20170801",
                [LIMIT]: 1
            },
            data
        };
        return reqwest(requestOptions);
    }
}

export default new Rest();

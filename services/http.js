const { WORKER_API } = require('./../config');
const { HTTPRequest } = require('./../utils/index');

const printReqRes = (url, reqHeader, reqBody, res) => {
    console.log(`---------------------------------------`);
    console.log(`url: ${url}`);
    console.log(`reqHeader: `, reqHeader);
    console.log(`reqBody: `, reqBody);
    console.log(`res: `, res);
    console.log(`---------------------------------------`);
};

const commonResponseHandler = (url, reqHeader, reqBody) => {
    return (r) => {
        const { body } = r;

        if (body.errorCode || r.status > 299) {
            printReqRes(url, reqHeader, reqBody, r);

            throw body.message;
        }

        return body;
    };
};

const get = (path, token) => {
    const reqHeader = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Version': '1.1',
        'X-App-Version': '1.1',
        'X-Token': token
    };

    const url = `${WORKER_API}${path}`;
    return HTTPRequest.get(url, reqHeader)
        .then(commonResponseHandler(url, reqHeader, undefined));
};

const post = (path, token, reqBody) => {
    const reqHeader = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Version': '1.1',
        'X-App-Version': '1.1',
        'X-Token': token
    };

    const url = `${WORKER_API}${path}`;
    return HTTPRequest.post(url, reqHeader, reqBody)
        .then(commonResponseHandler(url, reqHeader, reqBody));
};

const put = (path, token, reqBody) => {
    const reqHeader = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Version': '1.1',
        'X-App-Version': '1.1',
        'X-Token': token
    };

    const url = `${WORKER_API}${path}`;
    return HTTPRequest.put(url, reqHeader, reqBody)
        .then(commonResponseHandler(url, reqHeader, reqBody));
};

const del = (path, token) => {
    const reqHeader = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Version': '1.1',
        'X-App-Version': '1.1',
        'X-Token': token
    };

    const url = `${WORKER_API}${path}`;
    return HTTPRequest.delete(url, reqHeader).then(commonResponseHandler(url, reqHeader, undefined));
};

module.exports = { get, del, post, put };

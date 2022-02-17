const { config } = require('js-utils-deploy');
const { version } = require('./package.json');

const APP_NAME = "AlMeezan - Admin Panel";
const VERSION = version;
const API_VERSION = "1.0";
const WORKER_API = "https://www.almeezangroup.com";

Date.prototype.toDateStr = function () {
    return this.toISOString().split('T')[0];
}

module.exports = {
    ...config,
    VERSION,
    API_VERSION,
    APP_NAME,
    WORKER_API,
};
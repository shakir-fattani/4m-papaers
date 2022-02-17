const { utils } = require('js-utils-deploy');
const formattedAmount = (amount) => {
    if (amount == undefined)
        return ""
    var str = Number((amount).toFixed(2)).toLocaleString();
    if (str.charAt(str.length - 3) == ".")
        return str;
    else if (str.charAt(str.length - 2) == ".")
        return str + "0";
    return str + ".00";
};
utils.formattedAmount = formattedAmount;
module.exports = utils;
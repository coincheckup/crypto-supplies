/**
* @title Matrix AI Network
* @symbol MAN
* @ethContractAddr 0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

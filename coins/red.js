/**
* @title RED
* @symbol RED
* @ethContractAddr 0x76960dccd5a1fe799f7c29be9f19ceb4627aeb2f
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x76960dccd5a1fe799f7c29be9f19ceb4627aeb2f?apiKey=freekey', (error, response, body) => {
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

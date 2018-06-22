/**
* @title CPChain
* @symbol CPC
* @ethContractAddr 0xfae4ee59cdd86e3be9e8b90b53aa866327d7c090
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xfae4ee59cdd86e3be9e8b90b53aa866327d7c090?apiKey=freekey', (error, response, body) => {
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

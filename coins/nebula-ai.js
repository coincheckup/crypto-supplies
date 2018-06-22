/**
* @title Nebula AI
* @symbol NBAI
* @ethContractAddr 0x17f8afb63dfcdcc90ebe6e84f060cc306a98257d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x17f8afb63dfcdcc90ebe6e84f060cc306a98257d?apiKey=freekey', (error, response, body) => {
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

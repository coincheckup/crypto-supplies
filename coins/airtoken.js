/**
* @title AirToken
* @symbol AIR
* @ethContractAddr 0x27dce1ec4d3f72c3e457cc50354f1f975ddef488
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x27dce1ec4d3f72c3e457cc50354f1f975ddef488?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

/**
* @title Morpheus Network
* @symbol MORPH
* @ethContractAddr 0x2ef27bf41236bd859a95209e17a43fbd26851f92
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2ef27bf41236bd859a95209e17a43fbd26851f92?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

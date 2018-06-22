/**
* @title Cybereits
* @symbol CRE
* @ethContractAddr 0x61f33Da40594cEc1E3Dc900FaF99F861D01e2e7D
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x61f33Da40594cEc1E3Dc900FaF99F861D01e2e7D?apiKey=freekey', (error, response, body) => {
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

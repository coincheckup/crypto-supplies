/**
* @title Genaro Network
* @symbol GNX
* @ethContractAddr 0x6ec8a24cabdc339a06a172f8223ea557055adaa5
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6ec8a24cabdc339a06a172f8223ea557055adaa5?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -9)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

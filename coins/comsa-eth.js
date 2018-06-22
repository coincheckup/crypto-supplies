/**
* @title COMSA [ETH]
* @symbol CMS
* @ethContractAddr 0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

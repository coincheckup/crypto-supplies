/**
* @title Triaconta
* @symbol TRIA
* @ethContractAddr 0x3293cc907fde439b39aedaf1b982785adaff186b
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x3293cc907fde439b39aedaf1b982785adaff186b?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -10)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

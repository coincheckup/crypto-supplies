/**
* @title Gifto
* @symbol GTO
* @ethContractAddr 0xc5bbae50781be1669306b9e001eff57a2957b09d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xc5bbae50781be1669306b9e001eff57a2957b09d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -5)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

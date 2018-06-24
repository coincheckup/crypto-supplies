/**
 * @title TrueUSD
 * @symbol TUSD
 * @ethContractAddr 0x8dd5fbce2f6a956c3022ba3663759011dd51e73e
 * @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
    request('http://api.ethplorer.io/getTokenInfo/0x8dd5fbce2f6a956c3022ba3663759011dd51e73e?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                c: Number(body.totalSupply) * Math.pow(10, -18),
                t: Number(body.totalSupply) * Math.pow(10, -18)
            };

            callback(resp);
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};

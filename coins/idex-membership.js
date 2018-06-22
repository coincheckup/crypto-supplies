/**
* @title IDEX Membership
* @symbol IDXM
* @ethContractAddr 0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -8)
        };

        if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
            resp.c = Number(body.price.availableSupply);
        }

        callback(resp);
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

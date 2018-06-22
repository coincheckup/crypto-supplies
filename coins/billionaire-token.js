/**
* @title Billionaire Token
* @symbol XBL
* @ethContractAddr 0x49aec0752e68d0282db544c677f6ba407ba17ed7
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x49aec0752e68d0282db544c677f6ba407ba17ed7?apiKey=freekey', (error, response, body) => {
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

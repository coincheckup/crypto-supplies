/**
* @title Origami
* @symbol ORI
* @ethContractAddr 0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49?apiKey=freekey', (error, response, body) => {
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

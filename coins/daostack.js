/**
* @title DAOstack
* @symbol GEN
* @ethContractAddr 0x543ff227f64aa17ea132bf9886cab5db55dcaddf
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x543ff227f64aa17ea132bf9886cab5db55dcaddf?apiKey=freekey', (error, response, body) => {
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

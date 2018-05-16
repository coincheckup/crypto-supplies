/**
 * @title VeChain
 * @symbol VEN
 * @implementation Not Implemented
 */
var request = require('request');

module.exports = (callback) => {
    return callback(new Error('Not Implemented'));

    request('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xd850942ef8811f2a866692a623011bde52a462c1&tag=latest', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let supply = Number(JSON.parse(body).result) * Math.pow(10, -18);

            request('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xd850942ef8811f2a866692a623011bde52a462c1&address=0x000000000000000000000000000000000000dead&tag=latest', (error, response, body) => {
                let burnt = Number(JSON.parse(body).result) * Math.pow(10, -18);

                callback({
                    c: Math.round((supply - burnt) * 100) / 100
                });
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};

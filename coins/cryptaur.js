/**
 * @title Cryptaur
 * @symbol CPT
 * @ethContractAddr 0x88d50B466BE55222019D71F9E8fAe17f5f45FCA1
 * @implementation Dynamic
*/

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0x88d50B466BE55222019D71F9E8fAe17f5f45FCA1?apiKey=freekey', (error, response, body) => {
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
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

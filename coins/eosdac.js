/**
 * @title eosDAC
 * @symbol EOSDAC
 * @ethContractAddr 0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba
 * @implementation Dynamic
 * @cmcId eosdac
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -18)
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

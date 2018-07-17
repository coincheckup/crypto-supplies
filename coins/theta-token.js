/**
 * @title Theta Token
 * @symbol THETA
 * @ethContractAddr 0x3883f5e181fccaF8410FA61e12b59BAd963fb645
 * @implementation Dynamic
 * @cmcId theta-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3883f5e181fccaF8410FA61e12b59BAd963fb645?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

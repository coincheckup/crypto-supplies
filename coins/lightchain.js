/**
 * @title LightChain
 * @symbol LIGHT
 * @ethContractAddr 0xd97579Cea3fE2473682a4C42648134BB982433B9
 * @implementation Dynamic
 * @cmcId lightchain
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0xd97579Cea3fE2473682a4C42648134BB982433B9?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined') {
                return callback(new Error('Not Available'));
            }

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

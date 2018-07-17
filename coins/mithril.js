/**
 * @title Mithril
 * @symbol MITH
 * @ethContractAddr 0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb
 * @implementation Dynamic
 * @cmcId mithril
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply !== 'undefined') {
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

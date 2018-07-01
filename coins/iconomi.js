/**
 * @title Iconomi
 * @symbol ICN
 * @ethContractAddr 0x888666CA69E0f178DED6D75b5726Cee99A87D698
 * @implementation Dynamic
 * @cmcId iconomi
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0x888666CA69E0f178DED6D75b5726Cee99A87D698?apiKey=freekey', (error, response, body) => {
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

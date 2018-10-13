/**
 * @title Nucleus Vision
 * @symbol NCASH
 * @ethContractAddr 0x809826cceab68c387726af962713b64cb5cb3cca
 * @implementation Dynamic
 * @cmcId nucleus-vision
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x809826cceab68c387726af962713b64cb5cb3cca?apiKey=freekey', (error, response, body) => {
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

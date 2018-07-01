/**
 * @title Maker
 * @symbol MKR
 * @ethContractAddr 0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2
 * @implementation Dynamic
 * @cmcId maker
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?apiKey=freekey', (error, response, body) => {
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

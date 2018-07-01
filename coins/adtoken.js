/**
 * @title adToken
 * @symbol ADT
 * @ethContractAddr 0xd0d6d6c5fe4a677d343cc433536bb717bae167dd
 * @implementation Dynamic
 * @cmcId adtoken
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd0d6d6c5fe4a677d343cc433536bb717bae167dd?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -9)
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

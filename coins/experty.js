/**
 * @title Experty
 * @symbol EXY
 * @ethContractAddr 0x5c743a35e903f6c584514ec617acee0611cf44f3
 * @implementation Dynamic
 * @cmcId experty
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5c743a35e903f6c584514ec617acee0611cf44f3?apiKey=freekey', (error, response, body) => {
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

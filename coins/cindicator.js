/**
 * @title Cindicator
 * @symbol CND
 * @ethContractAddr 0xd4c435f5b09f855c3317c8524cb1f586e42795fa
 * @implementation Dynamic
 * @cmcId cindicator
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd4c435f5b09f855c3317c8524cb1f586e42795fa?apiKey=freekey', (error, response, body) => {
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

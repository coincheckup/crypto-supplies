/**
 * @title Flixxo
 * @symbol FLIXX
 * @ethContractAddr 0xf04a8ac553fcedb5ba99a64799155826c136b0be
 * @implementation Dynamic
 * @cmcId flixxo
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf04a8ac553fcedb5ba99a64799155826c136b0be?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

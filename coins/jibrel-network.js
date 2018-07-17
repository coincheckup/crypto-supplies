/**
 * @title Jibrel Network
 * @symbol JNT
 * @ethContractAddr 0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7
 * @implementation Dynamic
 * @cmcId jibrel-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7?apiKey=freekey', (error, response, body) => {
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

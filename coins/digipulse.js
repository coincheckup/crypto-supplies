/**
 * @title DigiPulse
 * @symbol DGPT
 * @ethContractAddr 0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1
 * @implementation Dynamic
 * @cmcId digipulse
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1?apiKey=freekey', (error, response, body) => {
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

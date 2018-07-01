/**
 * @title Skrumble Network
 * @symbol SKM
 * @ethContractAddr 0xd99b8a7fa48e25cce83b81812220a3e03bf64e5f
 * @implementation Dynamic
 * @cmcId skrumble-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd99b8a7fa48e25cce83b81812220a3e03bf64e5f?apiKey=freekey', (error, response, body) => {
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

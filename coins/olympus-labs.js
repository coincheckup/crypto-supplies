/**
 * @title Olympus Labs
 * @symbol MOT
 * @ethContractAddr 0x263c618480dbe35c300d8d5ecda19bbb986acaed
 * @implementation Dynamic
 * @cmcId olympus-labs
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x263c618480dbe35c300d8d5ecda19bbb986acaed?apiKey=freekey', (error, response, body) => {
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

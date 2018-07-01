/**
 * @title Eximchain
 * @symbol EXC
 * @ethContractAddr 0x00c4b398500645eb5da00a1a379a88b11683ba01
 * @implementation Dynamic
 * @cmcId eximchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x00c4b398500645eb5da00a1a379a88b11683ba01?apiKey=freekey', (error, response, body) => {
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

/**
 * @title Opus
 * @symbol OPT
 * @ethContractAddr 0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0
 * @implementation Dynamic
 * @cmcId opus
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0?apiKey=freekey', (error, response, body) => {
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

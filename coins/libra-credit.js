/**
 * @title Libra Credit
 * @symbol LBA
 * @ethContractAddr 0xfe5f141bf94fe84bc28ded0ab966c16b17490657
 * @implementation Dynamic
 * @cmcId libra-credit
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xfe5f141bf94fe84bc28ded0ab966c16b17490657?apiKey=freekey', (error, response, body) => {
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

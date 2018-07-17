/**
 * @title Bytom
 * @symbol BTM
 * @ethContractAddr 0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750
 * @implementation Dynamic
 * @cmcId bytom
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

/**
 * @title BitRent
 * @symbol RNTB
 * @ethContractAddr 0x1fe70be734e473e5721ea57c8b5b01e6caa52686
 * @implementation Dynamic
 * @cmcId bitrent
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1fe70be734e473e5721ea57c8b5b01e6caa52686?apiKey=freekey', (error, response, body) => {
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

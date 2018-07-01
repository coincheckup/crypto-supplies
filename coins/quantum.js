/**
 * @title Quantum
 * @symbol QAU
 * @ethContractAddr 0x671abbe5ce652491985342e85428eb1b07bc6c64
 * @implementation Dynamic
 * @cmcId quantum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x671abbe5ce652491985342e85428eb1b07bc6c64?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

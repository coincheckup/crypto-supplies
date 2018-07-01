/**
 * @title Paragon
 * @symbol PRG
 * @ethContractAddr 0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D
 * @implementation Dynamic
 * @cmcId paragon
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

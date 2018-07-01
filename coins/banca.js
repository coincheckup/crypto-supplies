/**
 * @title Banca
 * @symbol BANCA
 * @ethContractAddr 0x998b3b82bc9dba173990be7afb772788b5acb8bd
 * @implementation Dynamic
 * @cmcId banca
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x998b3b82bc9dba173990be7afb772788b5acb8bd?apiKey=freekey', (error, response, body) => {
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

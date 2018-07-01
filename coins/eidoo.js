/**
 * @title Eidoo
 * @symbol EDO
 * @ethContractAddr 0xced4e93198734ddaff8492d525bd258d49eb388e
 * @implementation Dynamic
 * @cmcId eidoo
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xced4e93198734ddaff8492d525bd258d49eb388e?apiKey=freekey', (error, response, body) => {
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

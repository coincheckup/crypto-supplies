/**
 * @title DigixDAO
 * @symbol DGD
 * @ethContractAddr 0xe0b7927c4af23765cb51314a0e0521a9645f0e2a
 * @implementation Dynamic
 * @cmcId digixdao
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0xe0b7927c4af23765cb51314a0e0521a9645f0e2a?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                t: Number(body.totalSupply) * Math.pow(10, -9)
            };

            if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
                resp.c = Number(body.price.availableSupply);
            }

            callback(resp);
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

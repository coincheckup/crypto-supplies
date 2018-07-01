/**
 * @title Scry.info
 * @symbol DDD
 * @ethContractAddr 0x9F5F3CFD7a32700C93F971637407ff17b91c7342
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0x9F5F3CFD7a32700C93F971637407ff17b91c7342?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                t: Number(body.totalSupply) * Math.pow(10, -18)
            };

            if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
                resp.c = Number(body.price.availableSupply);
            } else {
                resp.c = 300056960;
            }

            callback(resp);
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

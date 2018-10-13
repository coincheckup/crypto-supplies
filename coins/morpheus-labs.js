/**
 * @title Morpheus Labs
 * @symbol MITX
 * @ethContractAddr 0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6
 * @implementation Dynamic
 * @cmcId morpheus-labs
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -18)
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

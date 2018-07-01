/**
 * @title FundYourselfNow
 * @symbol FYN
 * @ethContractAddr 0x88FCFBc22C6d3dBaa25aF478C578978339BDe77a
 * @implementation Dynamic
 * @cmcId fundyourselfnow
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x88FCFBc22C6d3dBaa25aF478C578978339BDe77a?apiKey=freekey', (error, response, body) => {
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

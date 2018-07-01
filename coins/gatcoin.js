/**
 * @title Gatcoin
 * @symbol GAT
 * @ethContractAddr 0x687174f8c49ceb7729d925c3a961507ea4ac7b28
 * @implementation Dynamic
 * @cmcId gatcoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x687174f8c49ceb7729d925c3a961507ea4ac7b28?apiKey=freekey', (error, response, body) => {
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

/**
 * @title CargoX
 * @symbol CXO
 * @ethContractAddr 0xb6ee9668771a79be7967ee29a63d4184f8097143
 * @implementation Dynamic
 * @cmcId cargox
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb6ee9668771a79be7967ee29a63d4184f8097143?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        request('http://api.ethplorer.io/getAddressInfo/0x0000000000000000000000000000000000000000?apiKey=freekey', (addressInfoError, addressInfoResponse, addressInfoBody) => {
            addressInfoBody = JSON.parse(addressInfoBody);

            var cxoToken = addressInfoBody.tokens.find(obj => {
              return obj.tokenInfo.address === '0xb6ee9668771a79be7967ee29a63d4184f8097143'
            })

            var burntTokens = Number(cxoToken.balance) * Math.pow(10, -18);            

            callback({
                c: Number(body.price.availableSupply) - burntTokens,
                t: Number(body.totalSupply) * Math.pow(10, -18)
            });

        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

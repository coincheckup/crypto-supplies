/**
 * @title Hubii Network
 * @symbol HBT
 * @ethContractAddr 0xdd6c68bb32462e01705011a4e2ad1a60740f217f
 * @implementation Dynamic
 * @cmcId hubii-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xdd6c68bb32462e01705011a4e2ad1a60740f217f?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -15)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

/**
 * @title All Sports
 * @symbol SOC
 * @ethContractAddr 0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3
 * @implementation Dynamic
 * @cmcId all-sports
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3?apiKey=freekey', (error, response, body) => {
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

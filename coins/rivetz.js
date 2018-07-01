/**
* @title Rivetz
* @symbol RVT
* @ethContractAddr 0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244?apiKey=freekey', (error, response, body) => {
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

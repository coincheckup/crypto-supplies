/**
 * @title BlockMesh
 * @symbol BMH
 * @ethContractAddr 0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f
 * @implementation Dynamic
 * @cmcId blockmesh
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f?apiKey=freekey', (error, response, body) => {
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

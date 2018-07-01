/**
 * @title Rublix
 * @symbol RBLX
 * @ethContractAddr 0xFc2C4D8f95002C14eD0a7aA65102Cac9e5953b5E
 * @implementation Dynamic
 * @cmcId rublix
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xFc2C4D8f95002C14eD0a7aA65102Cac9e5953b5E?apiKey=freekey', (error, response, body) => {
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

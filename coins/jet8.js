/**
 * @title JET8
 * @symbol J8T
 * @ethContractAddr 0x0d262e5dc4a06a0f1c90ce79c7a60c09dfc884e4
 * @implementation Dynamic
 * @cmcId jet8
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0d262e5dc4a06a0f1c90ce79c7a60c09dfc884e4?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

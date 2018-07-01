/**
* @title Pareto Network
* @symbol PARETO
* @ethContractAddr 0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc?apiKey=freekey', (error, response, body) => {
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

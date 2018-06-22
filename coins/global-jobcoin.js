/**
* @title Global Jobcoin
* @symbol GJC
* @ethContractAddr 0x2ae965cd3d2b6d186e87d9586fc3bdbfc667cacc
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2ae965cd3d2b6d186e87d9586fc3bdbfc667cacc?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};

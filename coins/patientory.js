/**
* @title Patientory
* @symbol PTOY
* @ethContractAddr 0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06?apiKey=freekey', (error, response, body) => {
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

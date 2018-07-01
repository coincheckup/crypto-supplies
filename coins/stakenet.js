/**
 * @title StakeNet
 * @symbol XSN
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://xsnexplorer.io/api/stats',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.circulatingSupply),
                t: Number(body.totalSupply)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};

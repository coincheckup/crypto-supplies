/**
 * @title NEM
 * @symbol XEM
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://www.nodeexplorer.com/api_network_status',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.supplyXEM)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};

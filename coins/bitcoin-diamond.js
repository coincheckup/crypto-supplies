/**
 * @title Bitcoin Diamond
 * @symbol BCD
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'http://52.187.7.191:8080/info',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.data.circulating_supply) * Math.pow(10, -7),
                t: Number(body.data.circulating_supply) * Math.pow(10, -7),
                m: 210000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};

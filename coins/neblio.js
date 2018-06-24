/**
 * @title Neblio
 * @symbol NEBL
 * @implementation Dynamic
 */
var request = require('request-promise');

module.exports = (callback) => {
    Promise.all([
        request({
            uri: 'http://explorer.nebl.io/ext/getmoneysupply',
            rejectUnauthorized: false
        }),
        request({
            uri: 'http://explorer.nebl.io/ext/getbalance/NZREfode8XxDHndeoLGEeQKhsfvjWfHXUU',
            rejectUnauthorized: false
        })
    ])
    .then(results => {
        callback({
            c: Number(results[0]) - Number(results[1]),
            t: Number(results[0])
        })
    })
    .catch(error => {
        callback(new Error('Request error ' + error.message));
    });
};

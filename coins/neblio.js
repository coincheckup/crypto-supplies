/**
 * @title Neblio
 * @symbol NEBL
 * @implementation Dynamic
 */
module.exports = (callback, request) => {
    Promise.all([
        request({
            uri: 'http://explorer.nebl.io/ext/getmoneysupply',
            rejectUnauthorized: false,
            promise: true
        }),
        request({
            uri: 'http://explorer.nebl.io/ext/getbalance/NZREfode8XxDHndeoLGEeQKhsfvjWfHXUU',
            rejectUnauthorized: false,
            promise: true
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

/**
 * @title Ark
 * @symbol ARK
 * @implementation Dynamic
 */
var request = require('request-promise');

module.exports = (callback) => {
    Promise.all([
        request({
            uri: 'https://explorer.ark.io:8443/api/blocks/getSupply',
            rejectUnauthorized: false,
            json: true
        }),
        request({
            uri: 'https://explorer.ark.io:8443/api/accounts/top?orderBy=balance:desc&limit=25&offset=0',
            rejectUnauthorized: false,
            json: true
        })
    ])
    .then(results => {
        let arkTeam = 0,
            arkWallets = [
                'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv', // ARK Team
                'ALgvTAoz5Vi9easHqBK6aEMKatHb4beCXm', // ARK Shield
                'AYCTHSZionfGoQsRnv5gECEuFWcZXS38gs' // ARK Bounty
            ];

        results[1].accounts.forEach(item => {
            if (arkWallets.indexOf(item.address) !== -1) {
                arkTeam += Number(item.balance) * Math.pow(10, -8);
            }
        });

        callback({
            t: Number(results[0].supply) * Math.pow(10, -8),
            c: Number(results[0].supply) * Math.pow(10, -8) - arkTeam
        })
    })
    .catch(error => {
        callback(new Error('Request error ' + error.message));
    });
};

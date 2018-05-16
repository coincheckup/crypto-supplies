const fs = require('fs');
const request = require('request');
const _ = require('lodash');

request('https://api.coinmarketcap.com/v1/ticker/?limit=0', (error, response, cmc) => {
    cmc = JSON.parse(cmc);

    cmc = _.keyBy(cmc, 'id');

    _.forEach(cmc, coin => {
        coin.found = false;
    });

    fs.readdir(__dirname + '/../coins', (err, files) => {
        files.forEach(file => {
            var id = file.replace('.js', '');

            if (!_.isUndefined(cmc[id])) {
                cmc[id].found = true;
            }
        });

        _.forEach(_.filter(cmc, { found: false }), coin => {
            fs.writeFileSync(__dirname + '/../coins/' + coin.id + '.js', `/**
 * @title ${coin.name}
 * @symbol ${coin.symbol}
 * @implementation Not Implemented
 */
var request = require('request');

module.exports = (callback) => {
    callback(new Error('Not Implemented'));
};
`);
        });

        console.log('Done writing new coins missing from CMC');
    });
});
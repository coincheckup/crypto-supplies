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
            var path = __dirname + '/../coins/' + file,
                src = fs.readFileSync(path).toString(),
                metaRaw = src.match(/\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//gm),
                id = file.replace('.js', '');

            if (!_.isUndefined(cmc[id])) {
                cmc[id].found = true;
            }

            if (metaRaw === null) {
                if (!_.isUndefined(cmc[id])) {
                    var implementation = src.indexOf('Not Implemented') !== -1
                        ? 'Not Implemented'
                        : (src.indexOf("request('http") !== -1 ? 'Dynamic' : 'Static');

                    metaRaw = `/**
 * @title ${cmc[id].name}
 * @symbol ${cmc[id].symbol}
 * @implementation ${implementation}
 */
`;
                    fs.writeFileSync(path, metaRaw + src);
                }
            }
        });

        console.log('Done writing metas to all coins missing them');
    });
});
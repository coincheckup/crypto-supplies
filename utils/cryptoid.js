const request = require('request');
const fs = require('fs');

request('https://chainz.cryptoid.info/explorer/api.dws?q=summary', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        let coins = JSON.parse(body);

        for (var id in coins) {
            if (fs.existsSync(__dirname + '/../coins/' + coins[id].name.toLowerCase() + '.js')) {
                var path = __dirname + '/../coins/' + coins[id].name.toLowerCase() + '.js';

                var src = fs.readFileSync(path).toString();

                if (src.indexOf('Not Implemented') !== -1) {
                    src = `var request = require('request');

module.exports = (callback) => {
    request('https://chainz.cryptoid.info/${id}/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
`;

                    fs.writeFileSync(path, src);

                    console.log('Written new source for', path);
                }
            }
        }
    }
});
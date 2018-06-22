const fs = require('fs');
const request = require('request-promise');
const _ = require('lodash');
const doctrine = require('doctrine');

const timeout = ms => new Promise(res => setTimeout(res, ms))

let overrides = {
    'vslice.js': 1,
    'prochain.js': 1,
    'odem.js': 1,
    'bitpark-coin.js': 1,
    'digixdao.js': 1,
    'etheroll.js': 1,
    'experty.js': 1,
    'hero.js': 1,
    'idex-membership.js': 1,
    'goodomy.js': 1,
    'mywish.js': 1,
    'poa-network.js': 1,
    'waykichain.js': 1
}

fs.readdir(__dirname + '/../coins', async(err, files) => {
    for (let file of files) {
        var path = __dirname + '/../coins/' + file,
            ccuUrl = 'https://coincheckup.com/data/prod/201806221559/assets/' + file.replace('.js', '.json'),
            src = fs.readFileSync(path).toString(),
            metaRaw = src.match(/\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//gm),
            id = file.replace('.js', ''),
            ccuPathStat;

        if (metaRaw !== null) {
            var metaParsed = doctrine.parse(metaRaw[0], { unwrap: true, recoverable: true });

            metaObj = {};

            metaParsed.tags.forEach(item => {
                metaObj[item.title] = item.description;
            });

            if (metaObj['implementation'] !== 'Not Implemented') {
                continue;
            }
        } else {
            console.log(file, 'has no meta data');
            continue;
        }

        try {
            console.log(`GET ${ccuUrl}`);

            var ccuData = await request({
                method: 'GET',
                uri: ccuUrl,
                json: true
            })
        } catch (e) {
            console.error(file, e.message);
            continue;
        }

        if (_.isUndefined(ccuData.research)) {
            console.log(file, 'has no research data available');
            continue
        }

        let explorerUrls = _.filter(ccuData.research, (item, key) => {
            if (key.indexOf('chain_exp_') !== -1
                && item.substr(item.indexOf('0x')).length < 42
                && (
                    item.indexOf('etherscan.io/token') !== -1
                    || item.indexOf('ethplorer') !== -1
                )
            ) {
                console.log('>>> ', file, item);
            }

            return key.indexOf('chain_exp_') !== -1
                && item.substr(item.indexOf('0x')).length >= 42
                && (
                    item.indexOf('etherscan.io/token') !== -1
                    || item.indexOf('ethplorer') !== -1
                );
        });

        if (explorerUrls.length === 0 || explorerUrls[0].indexOf('0x') === -1) {
            continue
        }

        let contractAddr = explorerUrls[0].substr(explorerUrls[0].indexOf('0x')),
            url = `http://api.ethplorer.io/getTokenInfo/${contractAddr}?apiKey=freekey`;

        console.log(`GET ${url}`);

        try {
            let response = await request({
                method: 'GET',
                uri: url,
                json: true
            })

            if (metaObj.title.toLowerCase() != response.name.toLowerCase()
                && metaObj.symbol.toLowerCase() != response.symbol.toLowerCase()
                && _.isUndefined(overrides[file])
            ) {
                console.warn(file, 'mismatch between Ethplorer and our meta data')
                console.warn(file, metaObj, response.name, response.symbol)
                console.log('--------------------')
                continue;
            }

            var src = `/**
* @title ${metaObj.title}
* @symbol ${metaObj.symbol}
* @ethContractAddr ${contractAddr}
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/${contractAddr}?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -${response.decimals})
        };

        if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
            resp.c = Number(body.price.availableSupply);
        }

        callback(resp);
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
`;

            console.log(`Written ${file} implementation`);
            fs.writeFileSync(path, src);

            await timeout(1000);
        } catch (e) {
            console.error(file, e.message);
        }
    }

    console.log('Done writing implementations to all coins missing them');
});

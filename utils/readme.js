const fs = require('fs');
const doctrine = require("doctrine");
const request = require('request-promise');
const _ = require('lodash');

const Cacheman = require('cacheman-file');
const cache = new Cacheman({ ttl: 3600 });

fs.readdir(__dirname + '/../coins', async(err, files) => {
    var readme = fs.readFileSync(__dirname + '/../README.src.md').toString(),
        states = `
# Coin implementation statuses

`,
        counts = '',
        numImplemented = 0,
        table = `
ID | Name | Symbol | Implementation | Status
--- | --- | --- | --- | ---
`,
        ranks,
        tableData = [];

    await cache.get('ranks', async(err, value) => {
        if (err === null && value !== null) {
            ranks = value;
        } else {
            ranks = await request({
               uri: 'https://coincheckup.com/data/prod/201806241054/coins.json',
               json: true
            });

            cache.set('ranks', ranks);
        }
    });

    files.forEach(file => {
        var path = __dirname + '/../coins/' + file;

        var src = fs.readFileSync(path).toString();

        var metaRaw = src.match(/\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//gm),
            metaObj = null;

        if (metaRaw !== null) {
            var metaParsed = doctrine.parse(metaRaw[0], { unwrap: true, recoverable: true });

            metaObj = {};

            metaParsed.tags.forEach(item => {
                metaObj[item.title] = item.description;
            });
        }

        var implemented = src.indexOf('Not Implemented') === -1;

        numImplemented += implemented === true;

        let coinRank = _.find(ranks, { id: file.replace('.js', '') });

        if (_.isUndefined(coinRank)) {
            coinRank = 5000;
        } else {
            coinRank = coinRank.rank;
        }

        tableData.push({
            markup: '[' + file.replace('.js', '') + '](' + 'https://github.com/coincheckup/crypto-supplies/blob/master/coins/' + file + ')'
                + ' | '
                + (metaObj !== null && typeof metaObj.title !== 'undefined'
                    ? ('[' + metaObj.title + '](' + 'https://coincheckup.com/coins/' + file.replace('.js', '') + ')')
                    : 'N/A'
                )
                + ' | '
                + (metaObj !== null && typeof metaObj.symbol !== 'undefined' ? metaObj.symbol : 'N/A')
                + ' | '
                + (metaObj !== null && typeof metaObj.implementation !== 'undefined' ? metaObj.implementation : 'N/A')
                + ' | '
                + (implemented ? ':white_check_mark: Done' : ':x: Not done'),
            rank: coinRank
        });
    });

    tableData = _.orderBy(tableData, ['rank'], ['asc']).map(item => {
        return item.markup;
    });

    table += tableData.join("\n");

    counts = '*Total*: '
        + String(files.length)
        + ' -- *Implemented*: '
        + String(numImplemented)
        +
        ' -- *To do*: '
        + (files.length - numImplemented)
        + "\n\n";

    fs.writeFileSync(__dirname + '/../README.md', readme + states + counts + table);

    console.log('Done writing README.md with coin statuses');
});

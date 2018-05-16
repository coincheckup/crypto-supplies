const fs = require('fs');
const doctrine = require("doctrine");

fs.readdir(__dirname + '/../coins', (err, files) => {
    var readme = fs.readFileSync(__dirname + '/../README.src.md').toString(),
        states = `
# Coin implementation statuses

`,
        counts = '',
        numImplemented = 0,
        table = `
ID | Name | Symbol | Implementation | Status
--- | --- | --- | --- | ---
`;

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

        table += file.replace('.js', '')
            + ' | '
            + (metaObj !== null && typeof metaObj.title !== 'undefined' ? metaObj.title : 'N/A')
            + ' | '
            + (metaObj !== null && typeof metaObj.symbol !== 'undefined' ? metaObj.symbol : 'N/A')
            + ' | '
            + (metaObj !== null && typeof metaObj.implementation !== 'undefined' ? metaObj.implementation : 'N/A')
            + ' | '
            + (implemented ? '*+ Done*' : '`-- Not done`')
            + "\n";
    });

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

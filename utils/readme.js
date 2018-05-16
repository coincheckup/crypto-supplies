const fs = require('fs');

fs.readdir(__dirname + '/../coins', (err, files) => {
    var readme = fs.readFileSync(__dirname + '/../README.src.md').toString(),
        states = `
# Coin implementation statuses

`,
        counts = '',
        numImplemented = 0,
        table = 'ID | Status\n--- | ---\n';

    files.forEach(file => {
        var path = __dirname + '/../coins/' + file;

        var src = fs.readFileSync(path).toString();

        var implemented = src.indexOf('Not Implemented') === -1;

        numImplemented += implemented === true;

        table += file.replace('.js', '') + ' | ' + (implemented ? '*+ Done*' : '`-- Not done`') + "\n";
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

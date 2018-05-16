const fs = require('fs');

fs.readdir(__dirname + '/../coins', (err, files) => {
    var readme = fs.readFileSync(__dirname + '/../README.src.md').toString(),
        states = `# Coin implementation statuses

ID | Status
--- | ---
`;

    files.forEach(file => {
        var path = __dirname + '/../coins/' + file;

        var src = fs.readFileSync(path).toString();

        var implemented = src.indexOf('Not Implemented') === -1;

        states += file.replace('.js', '') + ' | ' + (implemented ? '*+ Done*' : '`-- Not done`') + "\n";
    });

    fs.writeFileSync(__dirname + '/../README.md', readme + states);

    console.log('Done writing README.md with coin statuses');
});

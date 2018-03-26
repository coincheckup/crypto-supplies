const {NodeVM} = require('vm2');
const vm = new NodeVM({
    console: 'inherit',
    require: {
        external: ['request'],
        import: ['request'],
        root: './'
    },
    timeout: 1000
});
const fs = require('fs');

fs.readdir('./coins', (err, files) => {
    files.forEach(file => {
        console.log(file, 'started');

        fs.readFile('./coins/' + file, 'utf8', (err, script) => {
            let res = vm.run(script, 'supplies.js');

            res((response) => {
                console.log(file, response);
            });
        });
    });
});

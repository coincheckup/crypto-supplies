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
const chalk = require('chalk');

const getSupplies = (file) => {
    fs.readFile(file, 'utf8', (err, script) => {
        try {
            let res = vm.run(script, 'supplies.js');

            res((response) => {
                if (response instanceof Error) {
                    console.log(file, chalk.red(response.message));
                } else {
                    console.log(file, chalk.green(JSON.stringify(response)));
                }
            });
        } catch (e) {
            console.log(file, chalk.red(e.message));
        }
    });
};

if (process.argv.length > 2) {
    const file = './coins/' + process.argv[2];

    getSupplies(file);
} else {
    fs.readdir('./coins', (err, files) => {
        files.forEach(file => {
            getSupplies('./coins/' + file);
        });
    });
}

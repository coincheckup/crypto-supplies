/**
 * @title Nexus
 * @symbol NXS
 * @implementation Dynamic
 */
var request = require('request'),
    cheerio = require('cheerio');

module.exports = (callback, request) => {
    request({
        uri: 'http://nexusoft.io/platform/client/supply.php',
        rejectUnauthorized: false,
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(body);

            $('table.black-text-smaller td').each(function(item) {
                if ($(this).text() != 'Supply:') {
                    return;
                }

                let mined = $($(this).parent('tr').find('td').get(1))
                    .text()
                    .replace(' NXS', '')
                    .replace(/,/g, '');

                callback({
                    c: Number(mined)
                })
            });
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
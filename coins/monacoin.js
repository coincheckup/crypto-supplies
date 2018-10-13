/**
 * @title MonaCoin
 * @symbol MONA
 * @implementation Dynamic
 * @cmcId monacoin
 */
var request = require('request'),
    cheerio = require('cheerio');

module.exports = (callback, request) => {
    request({
        uri: 'http://mona-coin.com/en/',
        rejectUnauthorized: false,
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(body);

            $('.table.table-bordered tr td').each(function(item) {
                if ($(this).text() != 'Mined') {
                    return;
                }

                let mined = $($(this).parent('tr').find('td').get(1))
                    .text()
                    .replace('mona', '')
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
/**
 * @title AdHive
 * @symbol ADH
 * @implementation Dynamic
 * @cmcId adhive
 */

module.exports = (callback, request) => {
    request('https://adhive.tv/circulatingsupply/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = body
                .replace(/ ADH/g, '')
                .replace(/ <br>/g, '')
                .replace(/Circulating supply /i, '')
                .replace(/Total supply: /i, '')
                .replace(/,/g, '')
                .split("\n");

            callback({
                c: Number(body[0]),
                t: Number(body[1])
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

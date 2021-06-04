/**
 * @title Fastcoin
 * @symbol FST
 * @implementation Not Implemented
 * @cmcId fastcoin
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/fst/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

//module.exports = (callback, request) => {
//    callback(new Error('Not Implemented'));
//};

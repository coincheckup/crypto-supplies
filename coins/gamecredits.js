/**
 * @title GameCredits
 * @symbol GAME
 * @implementation Dynamic
 * @cmcId gamecredits
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://blockexplorer.gamecredits.com/api/network/info',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.coinSupply),
                m: Number(body.coinMaxSupply)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};

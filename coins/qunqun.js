/**
* @title QunQun
* @symbol QUN
* @ethContractAddr 0x264Dc2DedCdcbb897561A57CBa5085CA416fb7b4
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x264Dc2DedCdcbb897561A57CBa5085CA416fb7b4?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

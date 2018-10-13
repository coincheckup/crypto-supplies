/**
 * @title REBL
 * @symbol REBL
 * @ethContractAddr 0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf
 * @implementation Dynamic
 * @cmcId rebl
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf?apiKey=freekey', (error, response, body) => {
     if (!error && response.statusCode == 200) {
         body = JSON.parse(body);

         var resp = {
             t: Number(body.totalSupply) * Math.pow(10, -18)
         };

         if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
             resp.c = Number(body.price.availableSupply);
         }

         callback(resp);
     } else {
         callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
     }
 });
 };

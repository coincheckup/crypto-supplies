/**
 * @title bitJob
 * @symbol STU
 * @ethContractAddr 0x0371a82e4a9d0a4312f3ee2ac9c6958512891372
 * @implementation Dynamic
 * @cmcId student-coin
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x0371a82e4a9d0a4312f3ee2ac9c6958512891372?apiKey=freekey', (error, response, body) => {
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

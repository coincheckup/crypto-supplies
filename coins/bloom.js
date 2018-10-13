/**
 * @title Bloom
 * @symbol BLT
 * @ethContractAddr 0x107c4504cd79c5d2696ea0030a8dd4e92601b82e
 * @implementation Dynamic
 * @cmcId bloomtoken
 */

 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x107c4504cd79c5d2696ea0030a8dd4e92601b82e?apiKey=freekey', (error, response, body) => {
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

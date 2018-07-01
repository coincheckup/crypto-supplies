/**
 * @title Trident Group
 * @symbol TRDT
 * @ethContractAddr 0x33f90Dee07c6E8B9682dD20F73E6C358B2ED0f03
 * @implementation Dynamic
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x33f90Dee07c6E8B9682dD20F73E6C358B2ED0f03?apiKey=freekey', (error, response, body) => {
     if (!error && response.statusCode == 200) {
         body = JSON.parse(body);

         var resp = {
             t: Number(body.totalSupply) * Math.pow(10, 0)
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

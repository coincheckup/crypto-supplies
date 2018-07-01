/**
 * @title XPA
 * @symbol XPA
 * @ethContractAddr 0x90528aeb3a2b736b780fd1b6c478bb7e1d643170
 * @implementation Dynamic
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x90528aeb3a2b736b780fd1b6c478bb7e1d643170?apiKey=freekey', (error, response, body) => {
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

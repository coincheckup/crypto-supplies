/**
 * @title Constellation
 * @symbol DAG
 * @ethContractAddr 0xa8258abc8f2811dd48eccd209db68f25e3e34667
 * @implementation Dynamic
 * @cmcId constellation
 */

 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0xa8258abc8f2811dd48eccd209db68f25e3e34667?apiKey=freekey', (error, response, body) => {
     if (!error && response.statusCode == 200) {
         body = JSON.parse(body);

         var resp = {
             t: Number(body.totalSupply) * Math.pow(10, -8)
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

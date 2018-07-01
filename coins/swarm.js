/**
 * @title Swarm
 * @symbol SWM
 * @ethContractAddr 0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a
 * @implementation Dynamic
 * @cmcId swarm-fund
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a?apiKey=freekey', (error, response, body) => {
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

/**
 * @title Spectiv
 * @symbol SIG
 * @ethContractAddr 0x6888a16ea9792c15a4dcf2f6c623d055c8ede792
 * @implementation Dynamic
 * @cmcId signal-token
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x6888a16ea9792c15a4dcf2f6c623d055c8ede792?apiKey=freekey', (error, response, body) => {
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

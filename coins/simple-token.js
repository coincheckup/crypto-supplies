/**
 * @title OST
 * @symbol OST
 * @ethContractAddr 0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca
 * @implementation Dynamic
 * @cmcId ost
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca?apiKey=freekey', (error, response, body) => {
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

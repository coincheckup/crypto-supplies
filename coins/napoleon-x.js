/**
 * @title NaPoleonX
 * @symbol NPX
 * @ethContractAddr 0x28b5e12cce51f15594b0b91d5b5adaa70f684a02
 * @implementation Dynamic
 * @cmcId napoleonx
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x28b5e12cce51f15594b0b91d5b5adaa70f684a02?apiKey=freekey', (error, response, body) => {
     if (!error && response.statusCode == 200) {
         body = JSON.parse(body);

         var resp = {
             t: Number(body.totalSupply) * Math.pow(10, -2)
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

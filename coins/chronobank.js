/**
 * @title Chronobank
 * @symbol TIME
 * @ethContractAddr 0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53
 * @implementation Dynamic
 * @cmcId chronobank
 */

 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53?apiKey=freekey', (error, response, body) => {
     if (!error && response.statusCode == 200) {
         body = JSON.parse(body);


         if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
             callback({
                 c: Number(body.price.availableSupply),
             });
         }
     } else {
         callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
     }
 });
 };

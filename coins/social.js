/**
 * @title Sociall
 * @symbol SCL
 * @ethContractAddr 0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8
 * @implementation Dynamic
 */
 var request = require('request');

 module.exports = (callback) => {
 request('http://api.ethplorer.io/getTokenInfo/0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8?apiKey=freekey', (error, response, body) => {
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
         callback(new Error('Request error ' + response.statusCode));
     }
 });
 };

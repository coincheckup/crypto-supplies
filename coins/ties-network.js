/**
 * @title Ties.DB
 * @symbol TIE
 * @ethContractAddr 0x999967e2ec8a74b7c8e9db19e039d920b31d39d0
 * @implementation Dynamic
 */
 var request = require('request');

 module.exports = (callback) => {
 request('http://api.ethplorer.io/getTokenInfo/0x999967e2ec8a74b7c8e9db19e039d920b31d39d0?apiKey=freekey', (error, response, body) => {
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
         callback(new Error('Request error ' + response.statusCode));
     }
 });
 };

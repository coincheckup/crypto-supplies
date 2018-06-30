/**
 * @title Voise
 * @symbol VOISE
 * @ethContractAddr 0x83eEA00D838f92dEC4D1475697B9f4D3537b56E3
 * @implementation Dynamic
 */
 var request = require('request');

 module.exports = (callback) => {
 request('http://api.ethplorer.io/getTokenInfo/0x83eEA00D838f92dEC4D1475697B9f4D3537b56E3?apiKey=freekey', (error, response, body) => {
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

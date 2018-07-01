/**
 * @title Restart Energy MWAT
 * @symbol MWAT
 * @ethContractAddr 0x6425c6be902d692ae2db752b3c268afadb099d3b
 * @implementation Dynamic
 * @cmcId restart-energy-mwat
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x6425c6be902d692ae2db752b3c268afadb099d3b?apiKey=freekey', (error, response, body) => {
     if (!error && response.statusCode == 200) {
         body = JSON.parse(body);

         callback({
             c: Number(body.price.availableSupply),
             t: Number(body.totalSupply) * Math.pow(10, -18),
             m: 500000000
         });
     } else {
         callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
     }
 });
 };

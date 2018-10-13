/**
 * @title SportyCo
 * @symbol SPF
 * @ethContractAddr 0x85089389c14bd9c77fc2b8f0c3d1dc3363bf06ef
 * @implementation Dynamic
 * @cmcId sportyco
 */
 
 module.exports = (callback, request) => {
 request('http://api.ethplorer.io/getTokenInfo/0x85089389c14bd9c77fc2b8f0c3d1dc3363bf06ef?apiKey=freekey', (error, response, body) => {
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

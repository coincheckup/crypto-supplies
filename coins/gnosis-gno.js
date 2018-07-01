/**
 * @title Gnosis
 * @symbol GNO
 * @ethContractAddr 0x6810e776880c02933d47db1b9fc05908e5386b96
 * @implementation Dynamic
 * @cmcId gnosis-gno
 */
 
 module.exports = (callback, request) => {
     request('http://api.ethplorer.io/getTokenInfo/0x6810e776880c02933d47db1b9fc05908e5386b96?apiKey=freekey', (error, response, body) => {
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

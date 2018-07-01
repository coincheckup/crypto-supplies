/**
 * @title TRON
 * @symbol TRX
 * @ethContractAddr 0xf230b790e05390fc8295f4d3f60332c93bed42e2
 * @implementation Dynamic
 */
 
 module.exports = (callback, request) => {
     request('http://api.ethplorer.io/getTokenInfo/0xf230b790e05390fc8295f4d3f60332c93bed42e2?apiKey=freekey', (error, response, body) => {
         if (!error && response.statusCode == 200) {
             body = JSON.parse(body);

             var resp = {
                 t: Number(body.totalSupply) * Math.pow(10, -6)
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

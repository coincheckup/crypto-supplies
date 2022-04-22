/**
 * @title SmartCash
 * @symbol SMART
 * @implementation Dynamic
 * @cmcId smartcash
 */

 module.exports = (callback, request) => {
     request('https://explorer3.smartcash.cc/ext/getmoneysupply', (error, response, body) => {
         if (!error && response.statusCode == 200) {
             callback({
                 c: Number(body),
                 t: Number(body),
                 m: 5000000000
             });
         } else {
             callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
         }
     });
 };

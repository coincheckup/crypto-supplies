/**
 * @title EOS
 * @symbol EOS
 * @implementation Dynamic
 * @cmcId eos
 */

module.exports = (callback, request) => {
    Promise.all([
        request({
            'uri': 'https://eospark.com/interface_main?n=get_base_info',
            headers: {
                'referer': 'https://eospark.com/',
                'content-type': 'application/x-www-form-urlencoded'
            },
            'method': 'POST',
            'body': '{"interface_name":"get_target_token_details","page":1,"size":1,"sort_field":"holder_num","sort_order":"descend","token_name":""}',
            promise: true,
            json: true
        }),
        request({
            uri: 'https://eos.greymass.com/v1/chain/get_currency_balance',
            headers: {
                'Origin': 'https://bloks.io',
                'Referer': 'https://bloks.io/account/eosio.ramfee',
                'content-type': 'text/plain;charset=UTF-8'
            },
            method: 'POST',
            body: '{"code":"eosio.token","account":"eosio.ramfee","symbol":"EOS"}',
            promise: true
        })
    ])
    .then(results => {
        if (typeof results[0].errmsg !== 'undefined'
            && results[0].errmsg == 'Success'
            && results[0].data.token_details_list[0].symbol == 'EOS'
        ) {
            results[0] = results[0].data.token_details_list[0]
            results[1] = Number(JSON.parse(results[1])[0].replace(' EOS', ''))

            var resp = {
                c: Number(results[0].supply - results[1]),
                m: Number(results[0].max_supply)
            }

            callback(resp)
        } else {
            callback(new Error('Response malformed'));
        }
    })
    .catch(error => {
        callback(new Error('Request error ' + error.message));
    });

    // request('http://api.ethplorer.io/getTokenInfo/0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0?apiKey=freekey', (error, response, body) => {
    //     if (!error && response.statusCode == 200) {
    //         body = JSON.parse(body);

    //         var resp = {
    //             t: Number(body.totalSupply) * Math.pow(10, -18)
    //         };

    //         if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
    //             resp.c = Number(body.price.availableSupply);
    //         }

    //         callback(resp);
    //     } else {
    //         callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    //     }
    // });
};


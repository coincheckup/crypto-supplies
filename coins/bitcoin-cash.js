/**
 * @title Bitcoin Cash
 * @symbol BCH
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://api.blockchair.com/bitcoin-cash',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let height,
                rewards = 0;

            const steps = [
                [0, 210000, 50],
                [210000, 420000, 25],
                [420000, 630000, 12.5],
                [630000, 840000, 6.25],
                [840000, 1050000, 3.125],
                [1050000, 1260000, 1.5625]
            ];

            for (let item of body.data) {
                if (item.e == 'blocks') {
                    height = Number(item.c)
                    break
                }
            }

            for (let i = 0; i < steps.length; i++) {
                if (height < steps[i][0]) {
                    break;
                }

                let amount = height - steps[i][0];

                if (amount > steps[i][1] - steps[i][0]) {
                    amount = steps[i][1] - steps[i][0];
                }

                rewards += steps[i][2] * amount;
            }

            callback({
                c: rewards,
                m: 21000000
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

/**
 * @title NEO
 * @symbol NEO
 * @implementation Static
 */
module.exports = (callback, request) => {
    // Source: https://coinmarketcap.com/currencies/neo/
    callback({
        c: 65000000,
        t: 100000000,
        m: 100000000
    });
};

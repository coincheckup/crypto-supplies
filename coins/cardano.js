/**
 * @title Cardano
 * @symbol ADA
 * @implementation Static
 */
module.exports = (callback) => {
    // Source: https://www.reddit.com/r/cardano/comments/7404yz/ada_circulating_supply_total_supply_and_max/
    callback({
        c: 31112484646,
        t: 31112484646,
        m: 45000000000
    });
};

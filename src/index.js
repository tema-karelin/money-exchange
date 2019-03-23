// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exchange = {};
    let worth = [50, 25, 10, 5, 1];
    let names = ["H", "Q", "D", "N", "P"];
    let amount =[];
    if (currency<=0) {return exchange};
    if (currency>10000) {exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
                        return exchange};
    for (let i=0; i < worth.length; i++) {
        let real= Math.floor(currency/worth[i]);
        amount.push(real);
        currency %= worth[i];
    };
    for (let i=0; i < worth.length; i++) {
        if (amount[i] != 0) {
            exchange[names[i]] = amount[i];
        }
    };
    return exchange;


}

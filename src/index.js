require("events").EventEmitter.defaultMaxListeners = 0;
module.exports = {
    stock: {
        finance: require("./stock/finance"),
        index: require("./stock/index"),
        symbols: require("./stock/symbols"),
        trading: require("./stock/trading"),
        fundflow: require("./stock/fundflow")
    }
};

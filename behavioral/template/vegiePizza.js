const pizza = require('./pizza')

class VegiePizza extends pizza {
    constructor() {
        super();
    }

    shouldPutCheese() {
        console.log('in vegie should');
        return false;
    }
}

module.exports = VegiePizza;
class Pizza {
    constructor() {

    }
    
    makePizza() {
        if (this.shouldSpreadSauce()) {
            this.spreadSauce();
        }

        if (this.shouldPutCheese()) {
            this.putCheese();
        }
    }

    shouldSpreadSauce() {
        return true;
    }

    shouldPutCheese() {
        return true;
    }

    spreadSauce() {
        console.log('Spreading tomato sauce');
    }

    putCheese() {
        console.log('Putting cheese over the pizza');
    }

}

module.exports = Pizza;
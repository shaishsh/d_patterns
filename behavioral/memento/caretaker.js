
class CareTaker{
    constructor() {
        this.memento = [];
    }

    addMemento(memento) {
        this.memento.push(memento);
    }

    getMemento(key) {
        return this.memento[key];
    }
}

module.exports = CareTaker;
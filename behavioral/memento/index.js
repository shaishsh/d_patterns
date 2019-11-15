const Originator = require('./originator');
const CareTaker = require('./caretaker');
const Memento = require('./memento');

const originator = new Originator('hello world');
const careTaker = new CareTaker();

careTaker.addMemento(originator.createMemento('hello world'));
careTaker.addMemento(originator.createMemento('new election in 2020'));
careTaker.addMemento(originator.createMemento('new election in 2021'));
console.log(originator);

originator.restoreFromMomento(careTaker.getMemento(1));
console.log(originator);

originator.restoreFromMomento(careTaker.getMemento(0));
console.log(originator);
class User2 {
    constructor(mediator) {
        this.mediator = mediator;
        this.name = 'user2';
    }

    addMsg(msg, to) {
        this.mediator.addMessages(msg, to);
    }

    print(msg) {
        console.log(`${this.name} got ${JSON.stringify(msg)}`);
    }
}

module.exports = User2;
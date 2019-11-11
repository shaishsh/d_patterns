class User1 {
    constructor(mediator) {
        this.mediator = mediator;
        this.name = 'user1';
    }

    addMsg(msg) {
        //console.log(msg)
        this.mediator.addMessages(msg);
    }

    print(msg) {
        console.log(`${this.name} got ${JSON.stringify(msg)}`);
    }
}

module.exports = User1;
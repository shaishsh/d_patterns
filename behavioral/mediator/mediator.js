class Mediator {
    constructor() {
        this.watingList = [];
        this.messages = [];
    }

    addToWaitingList(waiter) {
        this.watingList.push(waiter);
    }

    addMessages(message, to) {
        //console.log('adding msg')
        this.messages.push(message);
        this.sendMessages(message, to);
    }

    sendMessages(msg, to) {
        this.watingList.forEach((watingEntity) => {
            //console.log(watingEntity)
            if(msg.to === watingEntity.name) {
                watingEntity.print(msg);
            }
        });
    }

}

module.exports = Mediator;
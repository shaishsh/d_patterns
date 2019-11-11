const User1 = require('./user1');
const User2 = require('./user2');
const Msg = require('./message');
const Mediator = require('./mediator');

const mediator = new Mediator();
const user1 = new User1(mediator);
const user2 = new User2(mediator);

mediator.addToWaitingList(user1);
mediator.addToWaitingList(user2);
//console.log('before sending')
user1.addMsg(new Msg('user2', 'hi user 2'));


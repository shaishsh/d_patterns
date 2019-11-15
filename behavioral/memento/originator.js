const Memento = require('./memento');

class Originator {
    constructor(article) {
        this.article = article;
    }

    setArticle(newArticle) {
        this.article = newArticle;
    }

    createMemento(article) {
        console.log('Creating momento');

        return new Memento(article);
    }

    restoreFromMomento(memento) {
        this.article = memento.getArticle();
    }
}

module.exports = Originator;
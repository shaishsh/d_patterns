class Memento {
    constructor(article) {
        this.article = article;
    }

    getArticle() {
        return this.article;
    }
}

module.exports = Memento;
class MessageDTO {

    constructor( id, date, author, text ) {
        this._id = id;
        this.author = author;
        this.text = text;
        this.date = date;
    }

    getId(){ return this.id }
    getAuthor() { return this.author }
    getText() { return this.text }
    getDate() { return this.date }
}

module.exports = MessageDTO;
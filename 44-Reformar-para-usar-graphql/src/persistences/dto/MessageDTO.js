class MessageDTO {
    #id
    #author
    #text
    #date
    constructor( id, date, author, text ) {
        this.#id = id;
        this.#author = author;
        this.#text = text;
        this.#date = date;
    }

    getId(){ return this.#id }
    getAuthor() { return this.#author }
    getText() { return this.#text }
    getDate() { return this.#date }

    toJson(){
        return {
            id: this.#id,
            author: this.#author,
            text: this.#text,
            date: this.#date
        }
    }
}

module.exports = MessageDTO;
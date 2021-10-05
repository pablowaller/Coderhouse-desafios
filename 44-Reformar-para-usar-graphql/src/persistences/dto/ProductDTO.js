class ProductDTO {
    
    #id
    #title
    #price
    #thumbnail 

    constructor( id, title, price, thumbnail ) {
        this.#id = id;
        this.#title = title;
        this.#price = price;
        this.#thumbnail = thumbnail;
    }

    getId(){ return this.#id }
    getTitle() { return this.#title }
    getPrice() { return this.#price }
    getThumbnail() { return this.#thumbnail }

    toJson(){
        return {
            id: this.#id,
            title: this.#title,
            price: this.#price,
            thumbnail: this.#thumbnail
        }
    }
}

module.exports = ProductDTO;
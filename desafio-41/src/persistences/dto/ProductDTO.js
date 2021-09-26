class ProductDTO {

    constructor(id, title, price, thumbnail) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    getId() { return this.id }
    getTitle() { return this.title }
    getPrice() { return this.price }
    getThumbnail() { return this.thumbnail }
}

module.exports = ProductDTO;
class Book {
  constructor(author, title, pages, type, bindingType, price, owner) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.type = type;
    this.bindingType = bindingType;
    this.price = price;
    this.owner = owner;
  }

  changeOwner(newOwner) {
    this.owner = newOwner;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

export default Book;

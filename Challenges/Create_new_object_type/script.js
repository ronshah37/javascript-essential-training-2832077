// import Book from "./Book.js";

function Book(author, title, pages, type, bindingType, price, owner) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.type = type;
  this.bindingType = bindingType;
  this.price = price;
  this.owner = owner;

  this.changeOwner = function (newOwner) {
    this.owner = newOwner;
  };

  this.changePrice = function (newPrice) {
    this.price = price;
  };
}

const scienceBook = new Book(
  "Ronak Shah",
  "Oxygen Concentrators",
  45,
  "non-fiction",
  "soft binding",
  12,
  "Sunny Shah"
);

console.log(scienceBook);

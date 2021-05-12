import Book from "./Book.js";

// function Book(author, title, pages, type, bindingType, price, owner) {
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.type = type;
//   this.bindingType = bindingType;
//   this.price = price;
//   this.owner = owner;

//   this.changeOwner = function (newOwner) {
//     this.owner = newOwner;
//   };

//   this.changePrice = function (newPrice) {
//     this.price = price;
//   };
// }

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

const content = `
    <main>
      <article>
        <h1>
          ${scienceBook.title}
        </h1>
        <ul>
          <li>Author: ${scienceBook.author}</li>
          <li>Pages: ${scienceBook.pages}</li>
          <li>Type: ${scienceBook.type}</li>
          <li>Binding Type: ${scienceBook.bindingType}</li>
          <li>Price: ${scienceBook.price}</li>
          <li>Owner: ${scienceBook.owner}</li>
        </ul>
      </article>
    </main>
  `;

document.body.innerHTML = content;

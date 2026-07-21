// Array of Book objects
const myLibrary = [];

// Creating a Book constructor
function Book(title, author, numOfPages, bookRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.bookRead = bookRead;

  function info() {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.bookRead}`;
  }
}

// Creating a book using parameters then sotring it in an array
function addBookToLibrary() {}

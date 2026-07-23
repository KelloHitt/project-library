// Array of Book objects
const myLibrary = [];

// Creating a Book constructor
function Book(title, author, numOfPages, bookRead, id) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.bookRead = bookRead ? "read" : "not read yet";
  this.id = id;

  function info() {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.bookRead}`;
  }
}

// Creating a book using parameters then sotring it in an array
function addBookToLibrary(title, author, numOfPages, bookRead) {
  const newBookId = crypto.randomUUID();
  const newBook = new Book(title, author, numOfPages, bookRead, newBookId);
  myLibrary.push(newBook);
}

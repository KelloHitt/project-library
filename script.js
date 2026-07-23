// Array of Book objects
const myLibrary = [];

// Creating a Book constructor
function Book(title, author, numOfPages, bookRead, id) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.bookRead = bookRead ? "read" : "not read yet";
  this.id = id;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.bookRead}`;
  };
}

// Creating a book using parameters then sotring it in an array
function addBookToLibrary(title, author, numOfPages, bookRead) {
  // const is block scoped so it can technically be used as a new execution context is created and a new 'newBookId' is created
  const newBookId = crypto.randomUUID();
  const newBook = new Book(title, author, numOfPages, bookRead, newBookId);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Dune", "Frank Herbert", 412, true);

// book here is the index not the actual Book object
for (const book of myLibrary) {
  console.log(book.info());
}

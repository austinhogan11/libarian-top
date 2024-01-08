const myLibrary = [];

function Book(title, author, pages, pubYear) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.pubYear = pubYear;
}

function addBookToLibrary() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the book author:");
  const pages = prompt("Enter the number of pages:");
  const pubYear = prompt("Enter the book publication year:");
  const newBook = new Book(title, author, pages, pubYear);
  console.log(newBook);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function getLibrary(myLibrary) {
  console.log(myLibrary);
  // for (let book in myLibrary)
  //   console.log(book);
    // console.log(`${book.title} Written By: ${book.author} ${book.pages} pages Published in ${book.pubYear}:`)
}

function libraryMenu() {
  console.log("Welcome to Cho's Library")
  let selection = 0;
  do {
    selection = Number(prompt("Choose an option: 1. Enter a new book 2. View Book Inventory 3. Exit"));
    if (selection === 1)
      addBookToLibrary();
    else if (selection === 2)
      getLibrary();
    else if (selection === 3)
      console.log("Exiting Library App.");
    else
      console.log(`${selection} is an invalid option, please enter an option 1, 2 or 3.`)
  } while (selection !== 3);

}

libraryMenu();
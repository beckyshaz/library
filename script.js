const myLibrary = [];

function Book(author, title, pages) {
    let id = crypto.randomUUID();
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
   /* this.save = addBookToLibrary;*/

}

function addBookToLibrary(book) {
  // take params, create a book then store it in the array
    /* myLibrary.push({ 
        id: this.id,
        author: this.author,
        title: this.title,
        pages: this.pages

    }); */
    myLibrary.push(book);
}

let book = new Book("sharon", "alice in wonderland", 120);

console.log(book);

book1 = new Book("toby", "awesome", 150);

addBookToLibrary(book1);

console.log(myLibrary[0]);


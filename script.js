const myLibrary = [];

function Book(author, title, pages) {
    let id = crypto.randomUUID();
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;

}

function addBookToLibrary(book) {
    
    myLibrary.push({ 
        id: book.id,
        author: book.author,
        title: book.title,
        pages: book.pages
        

    }); 
}

let book = new Book("Sharon", "alice in wonderland", 120);
//book.save();

console.log(book);

book1 = new Book("Toby", "Awesome", 150);

book2 = new Book("coby", "Wonderful", 200);

book3 = new Book("Tony", "Blessed", 170);

book4 = new Book("Tobias", "Handsomelly Prosperous", 300);

book5 = new Book("Family", "Blessed Happpy Family", 500);

addBookToLibrary(book1);
addBookToLibrary(book);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
console.log(myLibrary.length);
const container = document.querySelector(".container");

function displayBook () {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        const div = document.createElement("div");
        div.innerHTML = `
        <p class="title">Title: ${myLibrary[i].title}</p>
        <p class="author">Author: ${myLibrary[i].author}</p>
        <p class="pages">Pages: ${myLibrary[i].pages}</p>
        `
        div.classList = "book";
        container.appendChild(div);
        
    }
    
}


displayBook();

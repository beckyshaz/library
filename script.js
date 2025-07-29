const myLibrary = [];

function Book(author, title, pages, read) {
    let id = crypto.randomUUID();
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(book) {
    
    myLibrary.push({ 
        id: book.id,
        author: book.author,
        title: book.title,
        pages: book.pages,
        read: book.read
    
    }); 
}


book1 = new Book("Toby", "Awesome", 150, "read");

book2 = new Book("coby", "Wonderful", 200, "read");

book3 = new Book("Tony", "Blessed", 170, "read");

book4 = new Book("Tobias", "Handsomelly Prosperous", 300, "read");

book5 = new Book("Family", "Blessed Happpy Family", 500, "not read");


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);


console.log(myLibrary.length);
const container = document.querySelector(".container");

function displayBook () {
    container.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        const div = document.createElement("div");
        div.innerHTML = `
        <p class="title">Title: ${myLibrary[i].title}</p>
        <p class="author">Author: ${myLibrary[i].author}</p>
        <p class="pages">Pages: ${myLibrary[i].pages}</p>
        <p class="read">Read: ${myLibrary[i].read}</p>
        `
        div.classList = "book";
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.setAttribute("data-id", myLibrary[i].id);
        deleteButton.addEventListener("click", () => {
            
            const deleteById  = deleteButton.dataset.id;
            console.log(deleteById);
            const index = myLibrary.findIndex((books) => books.id === deleteById);

            console.log(index);
            console.log(myLibrary[index]);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBook();
                console.log(myLibrary);
            }
        });
        div.appendChild(deleteButton);
        container.appendChild(div);
        
    }
    
}


displayBook();

const newBook = document.querySelector(".form-input-button");
const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".add-book");

newBook.addEventListener("click", () => {
    dialog.showModal();
}) 

addBook.addEventListener("click", (event) => {
    event.preventDefault();

    const bookTitle = document.querySelector(".title-input");
    const bookAuthor = document.querySelector(".author-input");
    const bookPages = document.querySelector(".pages-input");
    const readStatus = document.querySelector("#read");

    let book = new Book(bookAuthor.value, bookTitle.value, bookPages.value, readStatus.value);

    addBookToLibrary(book);
    console.log(myLibrary);
    dialog.close();
    displayBook();
    console.log(myLibrary.length);
    bookAuthor.value = "";
    bookPages.value = "";
    bookTitle.value = "";
})


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
    
    myLibrary.push(book); 
}


Book.prototype.changeBookStatus = function() {

    
    if (this.read === "read") {
        this.read = "not read"
    }
    else {
        this.read = "read";
    }
    
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

const container = document.querySelector(".container");


function displayBook () {
    container.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
       
        const div = document.createElement("div");
        div.innerHTML = `
        <p class="title"> ${myLibrary[i].title}</p>
        <p class="author">By ${myLibrary[i].author}</p>
        <p class="pages">${myLibrary[i].pages} pages </p>
        <p class="read">${myLibrary[i].read}</p>
        `
        div.classList = "book";
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList = "delete";
        deleteButton.setAttribute("data-id", myLibrary[i].id);
        deleteButton.addEventListener("click", () => {
            
            const deleteById  = deleteButton.dataset.id;
            
            const index = myLibrary.findIndex((books) => books.id === deleteById);

            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBook();
                
            }

        });
        const changeStatus = document.createElement("button");
        if (myLibrary[i].read === "read") {
            changeStatus.textContent = "not read";
           }else {
            changeStatus.textContent = "read";
           }
       
        changeStatus.classList = "change-book-status";
        changeStatus.setAttribute("data-id", myLibrary[i].id);
        
        changeStatus.addEventListener("click", () => {
           
           const readStatusId = changeStatus.dataset.id;
           const bookIndex = myLibrary.findIndex((myBook) => myBook.id === readStatusId);
           const bookObject = myLibrary[bookIndex];
           
           bookObject.changeBookStatus();
          
           displayBook();
        } )
        
        
        div.appendChild(changeStatus);
        div.appendChild(deleteButton);
        container.appendChild(div);
        
    }
    
}


displayBook();

const newBook = document.querySelector(".add-new-book");
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
    dialog.close();
    displayBook();
    bookAuthor.value = "";
    bookPages.value = "";
    bookTitle.value = "";
})


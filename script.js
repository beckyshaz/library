
class Book {
    static myLibrary = [];

    constructor (author, title, pages, read) {
        let id = crypto.randomUUID();
        this.id = id;
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

    static addBookToLibrary(book) {
    
        this.myLibrary.push(book); 
    }
    
    changeBookStatus() {
        if (this.read === "read") {
            this.read = "not read"
        }
        else {
            this.read = "read";
        }
    }

    static displayBook () {
        const container = document.querySelector(".container");
        container.innerHTML = "";
        for (let i = 0; i < this.myLibrary.length; i++) {
           
            const div = document.createElement("div");
            div.innerHTML = `
            <p class="title"> ${this.myLibrary[i].title}</p>
            <p class="author">By ${this.myLibrary[i].author}</p>
            <p class="pages">${this.myLibrary[i].pages} pages </p>
            <p class="read">${this.myLibrary[i].read}</p>
            `
            div.classList = "book";
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.classList = "delete";
            deleteButton.setAttribute("data-id", this.myLibrary[i].id);
            deleteButton.addEventListener("click", () => {
                
                const deleteById  = deleteButton.dataset.id;
                
                const index = this.myLibrary.findIndex((books) => books.id === deleteById);
    
                if (index !== -1) {
                    this.myLibrary.splice(index, 1);
                    Book.displayBook();
                    
                }
    
            });
            const changeStatus = document.createElement("button");
            if (this.myLibrary[i].read === "read") {
                changeStatus.textContent = "not read";
               }else {
                changeStatus.textContent = "read";
               }
           
            changeStatus.classList = "change-book-status";
            changeStatus.setAttribute("data-id", this.myLibrary[i].id);
            
            changeStatus.addEventListener("click", () => {
               
               const readStatusId = changeStatus.dataset.id;
               const bookIndex = this.myLibrary.findIndex((myBook) => myBook.id === readStatusId);
               const bookObject =this.myLibrary[bookIndex];
               
               bookObject.changeBookStatus();
              
               Book.displayBook();
            } )
            
            
            div.appendChild(changeStatus);
            div.appendChild(deleteButton);
            container.appendChild(div);
            
        }
        
    }

    static AddBookUi() {
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
            
            Book.addBookToLibrary(book);
            dialog.close();
            Book.displayBook();
            bookAuthor.value = "";
            bookPages.value = "";
            bookTitle.value = "";
        })
    }
}


book1 = new Book("Toby", "Awesome", 150, "read");
console.log(book1);


book2 = new Book("coby", "Wonderful", 200, "read");

book3 = new Book("Tony", "Blessed", 170, "read");

book4 = new Book("Tobias", "Handsomelly Prosperous", 300, "read");

book5 = new Book("Family", "Blessed Happpy Family", 500, "not read");


Book.addBookToLibrary(book1);
Book.addBookToLibrary(book2);
Book.addBookToLibrary(book3);
Book.addBookToLibrary(book4);
Book.addBookToLibrary(book5);

Book.displayBook();

Book.AddBookUi();

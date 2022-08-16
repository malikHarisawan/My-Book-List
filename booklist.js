class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static dispalyBook() {
        const storedbooks = [];

        const books = storedbooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");

        row.innerHTML = `

        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td> <a class=" btn btn-sm btn-danger delet">X</a></td>
        
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains("delet")) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");

        container.insertBefore(div, form);
        setTimeout(() => document.querySelector(".alert").remove(), 2000);
    }

    static clearfield() {
        document.querySelector("#title").value = " ";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}

document.addEventListener("DOMContentLoaded", UI.displaybook);

document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill the form", "danger");
    } else {
        const book = new Book(title, author, isbn);

        UI.addBookToList(book);
        UI.clearfield();
    }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target);
});

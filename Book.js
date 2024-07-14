// Book.js

class Book {
    constructor(title, author, isbn, id) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id = id;
        this.borrowed = false;
    }

    isBorrowed() {
        return this.borrowed;
    }
}

module.exports = Book;

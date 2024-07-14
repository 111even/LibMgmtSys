// User.js

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (this.borrowedBooks.length < 3 && !book.borrowed) {
            this.borrowedBooks.push(book);
            book.borrowed = true;
            console.log(`${this.name} borrowed ${book.title}`);
            return true;
        } else {
            console.log(`${this.name} cannot borrow more books.`);
            return false;
        }
    }

    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        book.borrowed = false;
        console.log(`${this.name} returned ${book.title}`);
    }

    peakBook(isbn) {
        return this.borrowedBooks.find(book => book.isbn === isbn);
    }
}

module.exports = User;

// Library.js

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    registerMember(user) {
        this.members.push(user);
    }

    borrowBook(user, isbn) {
        const bookToBorrow = this.books.find(book => book.isbn === isbn);
        if (!bookToBorrow) {
            console.log(`Book with ISBN ${isbn} not found in the library.`);
            return false;
        }

        return user.borrowBook(bookToBorrow);
    }
}

module.exports = Library;

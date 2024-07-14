const Book = require('./Book');
const User = require('./User');
const Library = require('./Library');

const library = new Library();

// Adding books to the library
const book1 = new Book('Things Fall Apart', 'Chinua Achebe', '9780547928227', '1');
const book2 = new Book('Purple Hibiscus', 'Purple Hibiscus', '9780451524935', '2');
library.addBook(book1);
library.addBook(book2);

// Registering users
const user1 = new User('Aliyu Abraham', '001');
const user2 = new User('Ishaq Abdulrazzaq', '002');
library.registerMember(user1);
library.registerMember(user2);

// Borrowing books
library.borrowBook(user1, '9780547928227'); // Aliyu Abraham borrows Things Fall Apart
library.borrowBook(user2, '9780451524935'); // Ishaq Abdulrazzaq borrows Purple Hibiscus

// Trying to borrow more than 3 books
library.borrowBook(user1, '9780451524935'); // Aliyu Abraham cannot borrow more books

// Returning books
user1.returnBook(book1); // Aliyu Abraham returns Things Fall Apart

// Peak at a borrowed book
const peekedBook = user2.peakBook('9780451524935');
console.log(`Ishaq Abdulrazzaq has peeked at ${peekedBook.title}`);

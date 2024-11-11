class Book {
    #isbn
    constructor(title , author , isbn , availableCopies = 1) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.availableCopies = availableCopies;
    }
    get copies(){
    return this.availableCopies;
    }
    set copies(newCopies) {
        this.availableCopies =  newCopies;
    }
    #validateIsbn (){
        return typeof this.#isbn === 'string' && this.#isbn.length === 13;
    }
    static generateIsbn() {
        return Math.floor(1000000000000 + Math.random() * 900000000000).toString();
    }
    get isbn(){
        return this.#validateIsbn() ? this.#isbn : 'Invalid ISBN';
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook (book) {
        if(book instanceof Book) {
            this.books.push(book);
        }else{
            console.log("Invalid book Objgect");
        }
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }
    searchBooks(Keywords) {
        return this.books.filter(book => 
            book.title.toLowerCase().includes(Keywords.toLowerCase()) ||
            book.author.toLowerCase().includes(Keywords.toLowerCase())
        );
    }
    displayBooks() {
        if(this.books.lenght === 0) {
            console.log("No books available in the Library.");
            return;
        }
        this.books.forEach(book  => {
            console.log(`Title:  ${book.title}, Author:  ${book.author}, ISBN:  ${book.isbn}, Available Copies:  ${book.copies}`);
        });
    }
}
let book1 =new Book("The Great Gatsby" , "F.Scott Fitzgerald" , Book.generateIsbn(), 3);

let book2 =new Book("To Kill a Mockingbird" , "Harper Lee" , Book.generateIsbn(), 2);

let library =new Library();

library.addBook(book1)

library.displayBooks();

console.log(library.searchBooks("Mockingbird"));

library.removeBook(book1.isbn);

library.displayBooks( );
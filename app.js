let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read} yet.`;
    }    
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
const lotr = new Book("LOTR", "J.R.R. Tolkien", 500, "read");
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 1000, "not read");

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(lotr);
addBookToLibrary(harryPotter);

let table = document.getElementById('libraryTable');

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        let row = table.insertRow(i + 1);

        let cell1 = row.insertCell(0);
        cell1.innerHTML = i + 1;

        let cell2 = row.insertCell(1);
        cell2.innerHTML = myLibrary[i].title;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = myLibrary[i].author;

        let cell4 = row.insertCell(3);
        cell4.innerHTML = myLibrary[i].pages;

        let cell5 = row.insertCell(4);
        cell5.innerHTML = myLibrary[i].read;
    }
}

displayBooks();
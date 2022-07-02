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

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

let table = document.getElementById('libraryTable');

function displayBooks() {
    let bookTitle = document.getElementById('bookTitle');
    let bookAuthor = document.getElementById('bookAuthor');
    let bookPages = document.getElementById('bookPages');
    let bookRead = document.getElementById('bookRead');
    let readValue = "";
    if (bookRead.checked) {
        readValue = "Read";
    } else {
        readValue = "Not Read";
    }

    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readValue);
    addBookToLibrary(newBook);

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


let addBook = document.getElementById('addBook');
addBook.addEventListener('click', displayBooks);
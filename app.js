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

function createForm() {
    let form = document.createElement('form');

    let labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'bookTitle');
    labelTitle.innerHTML = "Title of the new book:";
    form.appendChild(labelTitle);

    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'bookTitle');
    labelTitle.appendChild(inputTitle);

    let labelAuthor = document.createElement('label');
    labelAuthor.setAttribute('for', 'bookAuthor');
    labelAuthor.innerHTML = "Author of the book:";
    form.appendChild(labelAuthor);

    let inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('type', 'text');
    inputAuthor.setAttribute('id', 'bookAuthor');
    labelAuthor.appendChild(inputAuthor);

    let labelPages = document.createElement('label');
    labelPages.setAttribute('for', 'bookPages');
    labelPages.innerHTML = "Number of pages in the book:";
    form.appendChild(labelPages);

    let inputPages = document.createElement('input');
    inputPages.setAttribute('type', 'number');
    inputPages.setAttribute('id', 'bookPages');
    labelPages.appendChild(inputPages);

    let labelRead = document.createElement('label');
    labelRead.setAttribute('for', 'bookRead');
    labelRead.innerHTML = "Read the book.";
    form.appendChild(labelRead);
    
    let inputRead = document.createElement('input');
    inputRead.setAttribute('type', 'checkbox');
    inputRead.setAttribute('id', 'bookRead');
    labelRead.appendChild(inputRead);

    inputRead.style.float = 'left';
    labelRead.style.float = 'right';
    inputRead.style.marginRight = '10px';
    
    document.getElementsByTagName('body')[0].insertBefore(form, document.getElementById('addBook'));
}

let newBookButton = document.getElementById('newBook');
newBookButton.addEventListener('click', function() {
    createForm();
    newBookButton.disabled = true;
});

function getUserInput() {
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
    return newBook;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function displayBooks() {
    let table = document.getElementById('libraryTable');
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        let row = table.insertRow(myLibrary.length);

        let cell1 = row.insertCell(0);
        cell1.innerHTML = myLibrary.length;

        let cell2 = row.insertCell(1);
        cell2.innerHTML = myLibrary[i].title;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = myLibrary[i].author;

        let cell4 = row.insertCell(3);
        cell4.innerHTML = myLibrary[i].pages;

        let cell5 = row.insertCell(4);
        cell5.innerHTML = myLibrary[i].read;

        let cell6 = row.insertCell(5);
        let removeButton = document.createElement('Button');
        removeButton.innerHTML = 'remove';
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('data-number', i);
        cell6.appendChild(removeButton);
        removeButton.addEventListener('click', function(event) {
            removeBook(event.target);
        })
    }
}

function removeBook(button) {
    let index = parseInt(button.dataset.number);
    myLibrary.splice(index, 1);

    let table = document.getElementById('libraryTable');
    table.deleteRow(index + 1);

    for (let i = index; i < table.rows.length - 1; i++) {
        table.rows[i + 1].cells[5].childNodes[0].dataset.number -= 1;
        table.rows[i + 1].cells[0].innerHTML -= 1;
    }
}

let addBook = document.getElementById('addBook');
addBook.addEventListener('click', function() {
    addBookToLibrary(getUserInput());
    displayBooks();
});

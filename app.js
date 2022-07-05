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
        row.setAttribute('data-number', i);

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
    }
}

function removeBook() {
    // get the remove buttons from table
    let removeButton = document.getElementsByClassName('removeButton');
    
    // loop through remove buttons and add event listeners
    for (let i = removeButton.length - 1; i > -1; i--) {       
        removeButton[i].addEventListener('click', function() {
            // remove the Book object from myLibrary array
            myLibrary.splice(i, 1);

            let table = document.getElementById('libraryTable');
            //remove the corresponding row from table
            table.rows[i + 1].remove();
        });      
    }
}

let addBook = document.getElementById('addBook');
addBook.addEventListener('click', function() {
    addBookToLibrary(getUserInput());
    displayBooks();
    removeBook();
});

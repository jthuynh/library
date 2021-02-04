// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }
}


const submitBtn = document.getElementById('submit');
submit.addEventListener('click', addBookToLibrary);

function getUserInput(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    let newBook = new Book(title, author, pages, read);
    e.preventDefault();

    return newBook;
}


function addBookToLibrary(e) {
    const newBook = getUserInput(e);
    myLibrary.push(newBook);
    closeModal();
    document.getElementById('form').reset();
    displayBooks();
    saveStorage();
}

// display books in library
function displayBooks() {
  if (myLibrary.length == 0) {
    return;
  }
  const grid = document.querySelector('.book-grid');
  const br = document.createElement("br");
  const curNumCards = document.querySelectorAll('.book').length;
  if (curNumCards < myLibrary.length) {
    for (let i = curNumCards; i < myLibrary.length; i++) {
      let div = document.createElement('div');
      div.classList.add('book');
      
      div.setAttribute('data-indexnumber', i);
  
      let h2 = document.createElement('H2');
      h2.classList.add("book-text");
      let title = document.createTextNode(myLibrary[i].title);
      let author = document.createTextNode(myLibrary[i].author);
      let pages = document.createTextNode(myLibrary[i].numPages);
  
      h2.appendChild(title);
      h2.appendChild(br.cloneNode());
      h2.appendChild(author);
      h2.appendChild(br.cloneNode());
      h2.appendChild(pages);
      h2.appendChild(br.cloneNode());
  
      let readBtn = document.createElement("BUTTON");
      readBtn.classList.add('book-btn');

      let readBtnText;
      if (myLibrary[i].read == true) {
        readBtnText = document.createTextNode("READ");
        readBtn.classList.add('read-btn');
      } else {
        readBtnText = document.createTextNode("NOT READ");
        readBtn.classList.add('notread-btn');
      }
      readBtn.setAttribute("id", "read-btn");
      readBtn.addEventListener('click', toggleRead);
      readBtn.appendChild(readBtnText);
      h2.appendChild(readBtn);
  
      let removeBtn = document.createElement("BUTTON");
      removeBtn.classList.add('book-btn');
      
      removeBtn.innerHTML = `<i class="fa fa-trash-o icon" aria-hidden="true"></i>`;
      
      removeBtn.setAttribute("id", "remove-btn");
      removeBtn.addEventListener('click', removeBook);
      h2.appendChild(removeBtn);
  
      div.appendChild(h2);
      grid.appendChild(div);
    }
  }
}

function toggleRead(e) {
  let curBook = myLibrary[e.target.closest("div").getAttribute("data-indexnumber")];

  if (curBook.read == true) {
    e.target.classList.remove("read-btn");
    e.target.classList.add("notread-btn");
    e.target.innerHTML = "NOT READ";
    curBook.read = false;
  } else {
    e.target.classList.remove("notread-btn");
    e.target.classList.add("read-btn");
    e.target.innerHTML = "READ";
    curBook.read = true;
  }
  saveStorage();
}

const readBtns = document.querySelectorAll('#read-btn');
readBtns.forEach(button => button.addEventListener('click', toggleRead));

function removeBook(e) {
  let index = e.target.closest("div").getAttribute("data-indexnumber");
  let bookElem = document.querySelector(`div[data-indexnumber="${index}"`);
  bookElem.remove();
  myLibrary.splice(index, 1);

  displayBooks();
  updateArray();
  saveStorage();
}

const removeBtns = document.querySelectorAll('#remove-btn');
removeBtns.forEach(button => button.addEventListener('click', removeBook));

function updateArray() {
  const grid = document.querySelector('.book-grid');

  for (let i = 0; i < myLibrary.length; i++) {
    let curBook = grid.children[i];
    if (curBook.getAttribute("data-indexnumber") != i.toString()) {
      curBook.setAttribute("data-indexnumber", i);
    }
  }
}

function saveStorage() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

function restoreStorage() {
  myLibrary = localStorage.getItem('library') 
    ? JSON.parse(localStorage.getItem('library')) : [];
  
  if (myLibrary.length > 0) {
    displayBooks();
  }
}

restoreStorage();


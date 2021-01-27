let myLibrary = [new Book('clean code','a','23','false'), 
  new Book('fancy feast','b','54','true'), new Book('happiness','rober5t','354','false')];
 
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

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.changeStatus = function() {
    (this.read == true) ? this.read = false : this.read = true;
}

const submitBtn = document.getElementById('submit');
submit.addEventListener('click', addBookToLibrary);

// function to display books on their own card
function getUserInput(e) {
    // get input from the the modal and put it in to a new object
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    console.log(newBook);
    e.preventDefault();

    return newBook;
}


function addBookToLibrary(e) {
    const newBook = getUserInput(e);
    myLibrary.push(newBook);
    closeModal();
    document.getElementById('form').reset();
    displayBooks();
}

// display books in library
function displayBooks() {
  const grid = document.querySelector('.book-grid');
  const br = document.createElement("br");
  console.log(document.querySelectorAll('.book').length);
  const curNumCards = document.querySelectorAll('.book').length;
  if (curNumCards < myLibrary.length) {
    for (let i = curNumCards; i < myLibrary.length; i++) {
      let div = document.createElement('div');
      div.classList.add('book');
      
      // if attribute already exists, then skip
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
      let readBtnText = document.createTextNode("READ");
      readBtn.classList.add('book-btn');
      readBtn.setAttribute("id", "read-btn");
      readBtn.appendChild(readBtnText);
      h2.appendChild(readBtn);
  
      let removeBtn = document.createElement("BUTTON");
      // let removeBtnText = document.createTextNode("REMOVE");
      removeBtn.classList.add('book-btn');
      
      removeBtn.innerHTML = '<i class="fa fa-trash-o icon" aria-hidden="true"></i>';
      
      removeBtn.setAttribute("id", "remove-btn");
      // removeBtn.appendChild(removeBtnText);
      h2.appendChild(removeBtn);
  
      div.appendChild(h2);
      grid.appendChild(div);
    }
  }

  console.log(myLibrary);
}

displayBooks();

// figure out how to display books 1 at a time without repeats
// check if book being added is already in the array
// add logic for remove button
// add logic for read button
// reset grid 
// recreate grid


// add local storage
// add cloud storage


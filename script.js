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
    console.log(myLibrary);
    // close modal
    closeModal();
    document.getElementById('form').reset();
    // display the books again

}

// display books in library
function displayBooks() {
  const wrapper = document.querySelector('.wrapper');
  console.log(wrapper);
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(i);
    let div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute('data-indexnumber', i);
    wrapper.appendChild(div);
  }
}

displayBooks();
// Add delete button to each book's display


// add local storage
// add cloud storage


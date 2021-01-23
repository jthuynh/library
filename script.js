let myLibrary = ["Circe", "Clean Code", "Banapples"];

function Book(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.changeStatus = function() {
    (this.read == true) ? this.read = false : this.read = true;
}

function getUserInput() {

}

function addBookToLibrary() {
    const newBook = getUserInput();

    myLibrary.push(newBook);
    // To inherent an object use : Object.create(Book.prototype)
    // To create an object : use new
    // do stuff here
    // function here to...
    // take user’s input and store the new book objects into an array
}

// function to display books on their own card

// New book button: author, title, #pages, read or not

// Add delete button to each book's display

// button to change books read status (toggle read status of book prototype instance)

// add local storage
// add cloud storage

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

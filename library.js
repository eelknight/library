const myLibrary =[];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return `${title} by ${author} ${pages} pages read ${read}`
    }
}
const thereAndBackAgain = new Book("The Hobbit", "JRR Tolkien", 310, true)

const library= document.querySelector(".library");
const addBook= document.querySelector(".submitBook");
const title= document.querySelector(".title");
const author= document.querySelector(".author");
const pages= document.querySelector(".pages");
const read= document.querySelector(".read");

addBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
   const book = new Book(title.value, author.value, pages.value, read.value);
   myLibrary.unshift(book);
   const div= document.createElement("div");
   library.appendChild(div);
   div.textContent= book.info();
   style(div)
}


function style(div) {
  div.classList.add("book")
}
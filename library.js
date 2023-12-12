const myLibrary =[];

class Book {
  constructor (title,author,pages,read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
    bookInfo() {
      return `${this.title} by ${this.author}
       ${this.pages} pages`
    }
}

const cross= document.querySelector(".close")
const library= document.querySelector(".library");
const addBook= document.querySelector(".submitBook");
const title= document.querySelector(".title");
const author= document.querySelector(".author");
const pages= document.querySelector(".pages");
const read= document.querySelector(".read");

cross.addEventListener("click", dontAddToLibrary);
addBook.addEventListener("click", addBookToLibrary);

function dontAddToLibrary() {
   const dialog= document.querySelector("#dialog")
   dialog.close()
}

function addBookToLibrary() {
   const book = new Book(title.value, author.value, pages.value, read.value);
   myLibrary.push(book);
   title.value= ""
   author.value= ""
   pages.value= ""
   makeBook(book);
}

function makeBook(current) {
  const div= document.createElement("div");
   library.appendChild(div);
   div.classList.add(current.title);
  
   myLibrary.forEach(book => {
   div.textContent= book.bookInfo()
   });
   buttons(div,current);
}


function buttons(div,book) {
  const btnRemove= document.createElement("button");
  btnRemove.textContent= "Remove";
  btnRemove.id = book.title
  btnRemove.addEventListener("click", removeBook)
  div.appendChild(btnRemove);

  const btnRead= document.createElement("button");
  btnRead.textContent= read.value;
  btnRead.id = book.author
  btnRead.addEventListener("click", changeRead)
  div.appendChild(btnRead);
}


function removeBook() {
  const delTitle= this.id;
  myLibrary.forEach(element);

  function element(item, index) {
    if(item.title===delTitle){
     myLibrary.splice(index,1);
    }
  }
  const ui= document.getElementById(delTitle).parentElement.remove()
}

function changeRead() {
  const preChange= this.id;
  const change= document.getElementById(preChange);
  myLibrary.forEach(element);
  
  function element(item) {
    if(item.author===preChange){

      if(change.textContent==="Not read"){
        item.read= "Read";
        change.textContent= "Read";
      }else if(change.textContent==="Read") {
        item.read= "Not read"
        change.textContent= "Not read"
      }
    }
  } 
}
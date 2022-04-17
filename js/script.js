// Get the UI Element

let form = document.querySelector("#book_form");



// Book Class

class Book{
   constructor(tittle,author,isbn){
    this.tittle=tittle;
    this.author=author;
    this.isbn=isbn;
   }
}

//UI Class 

class UI{
   constructor(){



   }

   addToBooklist(book){
    let list = document.querySelector("#book-list");
    let row = document.createElement("tr");
    row.innerHTML=`
    <td>${book.tittle}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);
     
   };
   clearFields(){
    document.querySelector("#tittle").value="",
    document.querySelector("#author").value="",
    document.querySelector("#isbn").value="";


 };
};


//Add Event Listeners


form.addEventListener("submit",newbook);


//Declare The Function

function newbook(e){
    let tittle = document.querySelector("#tittle").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

   let book = new Book(tittle,author,isbn);
    
   let ui = new UI();
   ui.addToBooklist(book);

   ui.clearFields();


  e.preventDefault();
}


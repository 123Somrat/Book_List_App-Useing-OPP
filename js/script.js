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
 showalert(message,className){
   let div = document.createElement("div");
   div.className =`alert ${className}`;
   div.appendChild(document.createTextNode(message));
   let container = document.querySelector(".container");
   let form =  document.querySelector("#book_form");
   container.insertBefore(div,form);
  setTimeout(function(){
     document.querySelector(".alert").remove();

  },1500);


 };
   
};


//Add Event Listeners


form.addEventListener("submit",newbook);


//Declare The Function

function newbook(e){
    let tittle = document.querySelector("#tittle").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

    let ui = new UI();

    if(tittle==="" || author==="" || isbn==="" ){
      ui.showalert("please fill all the fields!","error")

    }else{
      let book = new Book(tittle,author,isbn);
   
      ui.addToBooklist(book);
      ui.clearFields();
      ui.showalert("Book Added","success")

    };

   


  e.preventDefault();
}


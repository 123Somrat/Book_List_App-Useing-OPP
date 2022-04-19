// Get the UI Element

let form = document.querySelector("#book_form");
let booklist = document.querySelector("#book-list");


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


  static addToBooklist(book){
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
  static clearFields(){
    document.querySelector("#tittle").value="",
    document.querySelector("#author").value="",
    document.querySelector("#isbn").value="";


 };
 static showalert(message,className){
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
  static deleteFromBook(target){
    if(target.hasAttribute("href")){
       target.parentElement.parentElement.remove();
       UI.showalert("Book Removed","success")
    }


   }
};

// Local Storage Class 

class store{
   static getBooks(){
     let books;
     if(localStorage.getItem("books")===null){
     books=[]
     }else{
   books = JSON.parse(localStorage.getItem("books"));
     }
      return books;
   }

   //Add Books In LocalStorage
   
   static addBook(book){
    let books = store.getBooks();
    books.push(book)

    localStorage.setItem("books",JSON.stringify("books"));
   }
};




//Add Event Listeners


form.addEventListener("submit",newbook);
booklist.addEventListener("click",removeBook);


//Declare The Function

function newbook(e){
    let tittle = document.querySelector("#tittle").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  

    if(tittle==="" || author==="" || isbn==="" ){
      UI.showalert("please fill all the fields!","error")

    }else{
      let book = new Book(tittle,author,isbn);
   
      UI.addToBooklist(book);
      UI.clearFields();
      UI.showalert("Book Added","success");
      store.addBook(book);

    };

  e.preventDefault();
}

// Removeing  Book Fron Booklist

function removeBook(e){

UI.deleteFromBook(e.target);

  e.preventDefault();

}
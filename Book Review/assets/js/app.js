// arrow scroll to top app
let arrowUp=document.getElementById("up");
let navtop=document.querySelector("header.nav-top");
onscroll=_=>{
    if(scrollY>100){
        arrowUp.classList.add("show");
    }else{
        arrowUp.classList.remove("show");
    }
}
arrowUp.onclick=_=>{
    scrollTo(0,0);
}
// header position fixed app
addEventListener( "scroll", _=>{
    if(scrollY > 200){
        navtop.classList.add("fixed-top" , "bg-white" , "shadow" );
    }else{
        navtop.classList.remove("fixed-top" , "bg-white" , "shadow" );
    }
})

// // stars code

// let starsAll=document.querySelectorAll(".card .card-body .stars .fa-star");
// starsAll.forEach((star , index) => {
//     star.addEventListener('click',_=>{
//         starsAll.forEach((newStar , newIndex) => {
//             if(newIndex <= index){
//                 newStar.classList.add('active');
//             }
//         });
//     })
// });

// add fav book app
let addBookBtns=document.querySelectorAll("#add-book");
let booksList=document.querySelector("#offcanvasScrolling .offcanvas-body");
let listNumber=document.querySelector("#list-num");
listNumber.innerText=0;

let bookAll=[JSON.parse(localStorage.getItem("books"))];
let book = {
    ImgSrc : "" ,
    Name : "asdaf" ,
    Catg : "asdasf" ,
    Auth : "asfafs" ,
}

// add book event
addBookBtns.forEach(btn => {
    btn.onclick=_=>{
        listNumber.innerText++;

        let bookImgSrc=btn.parentElement.parentElement.querySelector(".card-img-top").src;
        let bookName=btn.parentElement.querySelector(".card-title").innerText;
        let catgName=btn.parentElement.querySelector(".catg").innerText;
        let authName=btn.parentElement.querySelector("span").innerText;
        
        booksList.innerHTML+=`<div class="row mt-5">
        <div class="col bg-success d-flex align-items-center">
        <img src="${bookImgSrc}" alt="" class="img-fluid">
        </div>
        <div class="col d-flex flex-column align-items-center justify-content-center gap-4">
          <div class="name">${bookName}</div>
          <div class="catg">${catgName}</div>
          <div class="author">${authName}</div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <button id="del-btn" class="btn-close"></button>
        </div>
      </div>`

      book.ImgSrc=bookImgSrc;
      book.Name=bookName;
      book.Catg=catgName;
      book.Auth=authName;

      bookAll.push(book);
      
      localStorage.setItem("books" , JSON.stringify(bookAll));
    }
});

// remove book when click on close-btn 
document.addEventListener("click",(e)=>{
    if (e.target.id=="del-btn") {
        e.target.parentElement.parentElement.remove();
        listNumber.innerText--;
    }
})

function showData() {
    bookAll.forEach(element =>{
        console.log(element);
        booksList.innerHTML+=`<div class="row mt-5">
        <div class="col bg-success d-flex align-items-center">
        <img src="${element.ImgSrc}" alt="" class="img-fluid">
        </div>
        <div class="col d-flex flex-column align-items-center justify-content-center gap-4">
          <div class="name">${element.Name}</div>
          <div class="catg">${element.Catg}</div>
          <div class="author">${element.Auth}</div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <button id="del-btn" class="btn-close"></button>
        </div>
      </div>`
    })
}
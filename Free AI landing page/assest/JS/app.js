let faqBtns=document.querySelectorAll(".FAQ .accordion button");

faqBtns.forEach(btn =>{
    btn.onclick= _ =>{
        faqBtns.forEach(btn =>{
            btn.classList.remove("active");
        });
        btn.classList.toggle("active");
    }
});



// header scroll app
let header = document.getElementById("header");
let container=document.querySelector("header .container");

addEventListener( "scroll", _=>{
    if(scrollY > 150){
        header.classList.add("fixed-top" , "bg-white" , "shadow","m-0");
        container.classList.remove("container");
        document.querySelector("nav").style.borderRadius=0;
    }else{
        header.classList.remove("fixed-top" , "bg-white" , "shadow","m-0");
        container.classList.add("container");
        document.querySelector("nav").style.borderRadius='80px';
    }
})
// arrow scroll to the top app
let arrowUp=document.querySelector(".arrow-up");

addEventListener("scroll" , _=>{
    if(scrollY > 150){
        arrowUp.classList.add("show");
    }else{
        arrowUp.classList.remove("show");
    }
})
arrowUp.addEventListener("click",_=>{
    scrollTo(0,0)
})
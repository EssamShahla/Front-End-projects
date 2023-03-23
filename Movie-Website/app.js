// movie slider app
let arrowAll=document.querySelectorAll(".movie-list-wrapper .fa-chevron-right");
let leftArrows=document.querySelectorAll(".movie-list-wrapper .fa-chevron-left");
let movieListAll=document.querySelectorAll(".movie-list");
let clickCounter=0;
let ratio=Math.floor(window.innerWidth / 270);
console.log(ratio);

arrowAll.forEach((arrow,index)=>{
    const itemNumber=movieListAll[index].querySelectorAll("img").length;
    arrow.addEventListener("click",_=>{
        clickCounter++;
        leftArrows[index].classList.add("show");
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
            movieListAll[index].style.transform=`translateX(${movieListAll[index].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else{
            movieListAll[index].style.transform="translateX(0)";
            leftArrows[index].classList.remove("show");
            clickCounter=0;
        }
    })
})
leftArrows.forEach((arrow,index)=>{
    arrow.addEventListener("click",_=>{
        clickCounter--;
        if(movieListAll[index].computedStyleMap().get("transform")[0].x.value < -300){
            movieListAll[index].style.transform=`translateX(${movieListAll[index].computedStyleMap().get("transform")[0].x.value+300}px)`;
        }else{
            leftArrows[index].classList.remove("show");
            movieListAll[index].style.transform="translateX(0)";
            clickCounter=0;
        }
    })
});

// light&dark mode app
let toggleBall=document.querySelector(".toggle-ball");

toggleBall.onclick=_=>{
    document.body.classList.toggle("light-mode");
    toggleBall.classList.toggle("active");
}

// dropDown navBar & profile dropDown app
let dropDownKey=document.querySelector(".menu-respo");
let dropDownWindow=document.querySelector(".dropdown-respo");
let Profile=document.querySelector(".profile .text");
let ProfileRespoWindow=document.querySelector(".profile-respo");

dropDownKey.onclick=_=>{
    dropDownWindow.classList.toggle("active");
}

Profile.onclick=_=>{
    ProfileRespoWindow.classList.toggle("active");
}
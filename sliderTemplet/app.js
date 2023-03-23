// project images
let imgAll=document.querySelectorAll(".slider-container img");

// next,prev buttons
let NextBtn=document.getElementById("next");
let PrevBtn=document.getElementById("prev");

// get number of slides
let imgTotal = imgAll.length;

// current slide 
let current = 1;

// slide number element
let slideNumber= document.getElementById("slide-number");

// click on next , prev
NextBtn.onclick= Next;
PrevBtn.onclick= Prev;


// next,prev buttons functions
function Next() {
    if(NextBtn.classList.contains("disabled")){
        return false;
    }else{
        current++;
        checker();
    }
}

function Prev() {
    if(PrevBtn.classList.contains("disabled")){
        return false;
    }else{
        current--;
        checker();
    }
}

let indecatorsList=document.createElement("ul");
indecatorsList.setAttribute("id", "indecatorsList");
// creat li elements and add them to the ul list(responsive with any number of slides that you want)
for (let i = 1; i <= imgTotal; i++) {
    let slideIndex= document.createElement("li");
    slideIndex.setAttribute("slide-index",i)
    slideIndex.appendChild(document.createTextNode(i));
    indecatorsList.appendChild(slideIndex);
}
document.getElementById("indecators").appendChild(indecatorsList);


let indecatorsListCreated=document.getElementById("indecatorsList");
// this is the li elements => indecators
let indecators=document.querySelectorAll("#indecatorsList li");

indecators.forEach(element => {
    element.onclick= _=>{
        current= parseInt(element.getAttribute("slide-index"));
        checker();
    }
});
    




// checker function to show the index of the img which we stand on it
// BIG BOSS 
function checker() {
    slideNumber.textContent="slide #" + (current) + " of " + imgTotal ;

    clearAllActive();

    imgAll[current - 1].classList.add("active");

    indecators[current - 1].classList.add("active");
    

    // check if the currentSlide is the first 
    if(current == 1 ) {
        PrevBtn.classList.add("disabled");
    }else{
        PrevBtn.classList.remove("disabled");
    }

    // chech if the currentSlide is the last
    if(current == imgTotal){
        NextBtn.classList.add("disabled");
    }else{
        NextBtn.classList.remove("disabled");
    }
}
checker()


// clear active class function
function clearAllActive() {
    imgAll.forEach(img => {
        img.classList.remove("active");
        
    });

    indecators.forEach(index =>{
        index.classList.remove("active");
    });
}
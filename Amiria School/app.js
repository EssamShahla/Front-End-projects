let navLinks=document.querySelectorAll("nav .container .navbar a");
console.log(navLinks);

navLinks.forEach(element => {
    element.onclick=_=>{
        navLinks.forEach(element => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    }
});

// navigation action

let iconBar=document.getElementById("baricon");
let smNavLinks=document.getElementById("SMlinks");
console.log(iconBar);
console.log(smNavLinks);


iconBar.onclick=_=>{
    smNavLinks.classList.toggle("show");
}

// barIcon click

let menulinks = document.querySelectorAll(".nav-link");

let menu = document.querySelector(".links");

let menubtn = document.querySelector(".menu-checkbtn");
let clicked = true;
menubtn.addEventListener("click",()=>{
    if(clicked){
        menu.classList.add("open");
        clicked = false;
    }
    else{
        menu.classList.remove("open");
        clicked = true;
    }
    console.log("opened");
});


menulinks.forEach(link =>{
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});
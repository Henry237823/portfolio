const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", ()=> {
    menu.classList.add("active");
});

menu.addEventListener("click", ()=> {
    menu.classList.remove("active");
});

const counter = document.querySelectorAll(".progress__column-numbers"),
      lines = document.querySelectorAll(".progress__column-percent span");

  

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
    
});
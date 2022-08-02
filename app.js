const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".navbar");

hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

function openMenu() {
    menu.classList.remove("hidden");
}
function closeMenu(){
    menu.classList.add("hidden");
}
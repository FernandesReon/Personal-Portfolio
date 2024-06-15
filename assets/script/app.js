const mobileView = document.querySelector(".mobile-view-btns");
const desktopView = document.querySelector(".container")

const toggleNavbar = () =>{
    desktopView.classList.toggle("active");
}

mobileView.addEventListener("click", () => toggleNavbar());


//disable right-click
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});
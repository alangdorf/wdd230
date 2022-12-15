const hamBtn = document.getElementById("hamburger");
const navList = document.querySelector("nav ul");
function openMenu() {
    hamBtn.classList.toggle("open");
    navList.classList.toggle("open");
}
hamBtn.onclick = openMenu;
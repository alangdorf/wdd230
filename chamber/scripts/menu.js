function toggleMenu() {
    document.getElementById('topNav').classList.toggle("open");
    document.getElementById('hamburger').classList.toggle("open");
}

const x = document.getElementById('hamburger');

x.onclick = toggleMenu;
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Change icon
    if (navMenu.classList.contains("active")) {
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }
});




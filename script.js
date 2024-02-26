
//Nav responsive
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");

    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


// Downloading PDF

function downloadPDF() {
    var pdfPath = "gym-workout-plan-for-beginners.pdf";

    var link = document.createElement('a');
    link.href = pdfPath;

    link.download = "gym-workout-plan-for-beginners.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
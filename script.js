alert("Welcome to Noor Al-Quran Academy");

// WhatsApp Button
function showmessage() {
    alert("JazakAllah! Please contact us on WhatsApp to book your free trial class.");
}

// Registration Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("🎉 Registration Successful!");
    });
}

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const id = this.getAttribute("href");
        const section = document.querySelector(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });

            // Mobile menu close
            document.querySelector(".menu").classList.remove("show");
        }
    });
});

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Back To Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Image Slider
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    }, 3000);
}

// Reviews Slider
const reviews = document.querySelectorAll(".review");

if (reviews.length > 0) {

    let reviewIndex = 0;

    setInterval(() => {

        reviews[reviewIndex].classList.remove("active");

        reviewIndex = (reviewIndex + 1) % reviews.length;

        reviews[reviewIndex].classList.add("active");

    }, 4000);
}

// Mobile Menu
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
}
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
});
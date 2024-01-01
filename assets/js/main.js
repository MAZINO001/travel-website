/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const BlurHeader = () => {
    const header = document.getElementById("header");
    window.scrollY < 50 ? header.classList.remove("blur-header")
        : header.classList.add("blur-header")
};
window.addEventListener("scroll", BlurHeader);
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (window.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href *=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href *=" + sectionId + "]").classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data, .explore__data ,.explore__user ,.footer__container')
sr.reveal('.home__card', { delay: 600, distance: "100px", interval: 100 })
sr.reveal('.about__data, .join__image', { origin: "right" })
sr.reveal('.about__image, .join__data', { origin: "left" })
sr.reveal('.popular__card', { interval: 200 })
var typed = new Typed("#typed-text", {
    strings: ["Freelancer", "Photographer", "Designer", "Developer"],
    typeSpeed: 90,
    backSpeed: 40,
    loop: true,
    backDelay: 2000,
});


// Scroll Top

const button = document.querySelector(".top");

const displayButton = () => {
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);

        if (window.scrollY > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};

const scrollToTop = () => {
    button.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        console.log(event);
    });
};

displayButton();
scrollToTop();

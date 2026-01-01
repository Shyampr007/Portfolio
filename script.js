const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((section, index) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                section.classList.add("active");
            }, index * 150);
        }
    });
});
window.addEventListener("load", () => {

    if (typeof particlesJS === "undefined") {
        console.error("Particles.js not loaded");
        return;
    }

    particlesJS("particles-js", {
        particles: {
            number: { value: 70 },
            color: { value: "#38bdf8" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 140,
                color: "#38bdf8",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        },
        retina_detect: true
    });

});

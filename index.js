VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0, // scale for desktop
    scaleMobile: 1.0,
    backgroundColor: 0xf9f9f9, // white background for birds
    color1: 0x007bff, // blue birds
    color2: 0x555555, // gray birds
    colorMode: "lerp", // smooth color transition
    quantity: 2.0, // number of birds
    separation: 100.0,
    alignment: 11.0,
    cohesion: 50.0,
});

// Click ripple effect
// Optional click ripple effect
document.addEventListener("click", function (e) {
    const circle = document.createElement("div");
    circle.classList.add("click-circle");

    // Set size
    circle.style.width = "50px";
    circle.style.height = "50px";

    // Position
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;

    // Add to body
    document.body.appendChild(circle);

    // Remove when done
    circle.addEventListener("animationend", () => {
        circle.remove();
    });
});

//about section
AOS.init();

// projects section
const lightbox = GLightbox({
    selector: ".glightbox",
});

//success alert for contact form
const form = document.getElementById("contactForm");
const alertBox = document.getElementById("contactAlert");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real submission

    // Show the alert
    alertBox.classList.remove("d-none");

    // Optionally clear the form
    form.reset();

    // Hide the alert after 5 seconds
    setTimeout(() => {
        alertBox.classList.add("d-none");
    }, 5000);
});

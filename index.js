//   let vantaEffect;

function initVanta(quantity) {
    // Completely remove and replace the DOM element
    const container = document.getElementById("vanta-container");
    container.innerHTML = '<div id="vanta-bg"></div>';

    // Apply the Vanta effect again
    vantaEffect = VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xf9f9f9,
        color1: 0x007bff,
        color2: 0x555555,
        colorMode: "lerp",
        quantity: quantity,
        separation: 10.0,
        alignment: 10.0,
        cohesion: 10.0,
        birdSize: 0.5,
        speedLimit: 0.5,
    });
}

let vantaEffect = VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 0.3,
    backgroundColor: 0xf9f9f9,
    color1: 0x007bff,
    color2: 0x555555,
    colorMode: "lerp",
    quantity: 2.0,
    separation: 100.0,
    alignment: 1.0,
    cohesion: 100.0,
    birdSize: 1.0,
    speedLimit: 2.0,
});

// Trigger fade-out after 5 seconds
setTimeout(() => {
    const bg = document.getElementById("vanta-bg");
    if (bg) {
        bg.style.opacity = "0";
    }
}, 10000);

// Optional: fully destroy the Vanta instance after fade
setTimeout(() => {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
}, 13000);

setTimeout(() => {
    initVanta(0.5);
    const bg = document.getElementById("vanta-bg");
    if (bg) {
        bg.style.opacity = "0.6"; // Reset opacity for new effect
    }
}, 13500);

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
    touchNavigation: true,
    loop: true,
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
function showModal() {
    document.getElementById("resumeModal").style.display = "block";
}

function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
    document.getElementById("requestMessage").style.display = "none";
}

function submitRequest(event) {
    event.preventDefault();
    const form = document.getElementById("resumeRequestForm");
    const email = form.email.value;
    const reason = form.reason.value;

    console.log("Resume requested by:", email, "for:", reason);

    form.reset();
    document.getElementById("requestMessage").style.display = "block";

    setTimeout(() => {
        closeModal();
    }, 3000);
}

window.onclick = function (event) {
    const modal = document.getElementById("resumeModal");
    if (event.target == modal) {
        closeModal();
    }
};

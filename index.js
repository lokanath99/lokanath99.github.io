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
    quantity: 3.0,
    separation: 100.0,
    alignment: 10.0,
    cohesion: 50.0,
    birdSize: 1.0,
    speedLimit: 2.0,
});
// Initialize Vanta effect with a specific quantity
function initVanta(quantity) {
    const container = document.getElementById("vanta-container");
    container.innerHTML = '<div id="vanta-bg"></div>';

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
        separation: 100.0,
        alignment: 10.0,
        cohesion: 50.0,
        birdSize: 1.0,
        speedLimit: 2.0,
    });
}

setTimeout(() => {
    const bg = document.getElementById("vanta-bg");
    if (bg) {
        bg.style.opacity = "0";
    }
}, 10000);

// Destroy Vanta instance
setTimeout(() => {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
}, 13000);

// Optionally re-init it
setTimeout(() => {
    initVanta(2);
    const bg = document.getElementById("vanta-bg");
    if (bg) {
        bg.style.opacity = "0.6";
    }
}, 13500);

// Only apply disappear effect on mobile (width < 768px)
if (window.innerWidth < 768) {
    // Fade out after 5s
    setTimeout(() => {
        const bg = document.getElementById("vanta-bg");
        if (bg) {
            bg.style.opacity = "0";
        }
    }, 10000);

    // Destroy Vanta instance
    setTimeout(() => {
        if (vantaEffect) {
            vantaEffect.destroy();
        }
    }, 13000);

    // Optionally re-init it
    setTimeout(() => {
        initVanta(0.1);
        const bg = document.getElementById("vanta-bg");
        if (bg) {
            bg.style.opacity = "0.2";
        }
    }, 13500);
}

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

const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    closeButton: true,
    zoomable: true,
    draggable: true,
    plyr: {
        css: "https://cdn.plyr.io/3.6.2/plyr.css",
        js: "https://cdn.plyr.io/3.6.2/plyr.js",
    },
    openEffect: "fade",
    closeEffect: "fade",
    slideEffect: "slide",
    moreText: "See More",
    autoplayVideos: false,
});

//success alert for contact form
const form = document.getElementById("contactForm");
const alertBox = document.getElementById("contactAlert");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    await fetch("https://formsubmit.co/ajax/lokanath1912@gmail.com", {
        method: "POST",
        body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        }),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                alertBox.classList.remove("d-none");
                form.reset();
                setTimeout(() => {
                    alertBox.classList.add("d-none");
                }, 5000);
            } else {
                alert("Submission failed. Please try again.");
            }
        })
        .catch(() => {
            alert("Submission failed. Please try again.");
        });
});

// Resume request modal
function showModal() {
    document.body.style.overflow = "hidden"; // Prevent background scroll on iOS
    document.getElementById("resumeModal").style.display = "block";
}

function closeModal() {
    document.body.style.overflow = ""; // Restore scroll
    document.getElementById("resumeModal").style.display = "none";
    document.getElementById("requestMessage").style.display = "none";
}

async function submitRequest(event) {
    event.preventDefault();
    const form = document.getElementById("resumeRequestForm");
    const email = form.email.value;
    const reason = form.reason.value;
    await fetch("https://formsubmit.co/ajax/lokanath1912@gmail.com", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            reason: reason,
        }),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                // Show success message
                document.getElementById("requestMessage").style.display =
                    "block";

                // Trigger resume download
                const resumeLink = document.createElement("a");
                resumeLink.href = "Assets/resume.pdf";
                resumeLink.download = "resume.pdf";
                resumeLink.style.display = "none";
                document.body.appendChild(resumeLink);
                resumeLink.click();
                document.body.removeChild(resumeLink);

                // Reset form
                form.reset();

                // Close modal after a delay
                setTimeout(() => {
                    closeModal();
                }, 3000);
            } else {
                alert("Failed to submit request. Please try again.");
            }
        })
        .catch(() => {
            alert("Failed to submit request. Please try again.");
        });
}

window.onclick = function (event) {
    const modal = document.getElementById("resumeModal");
    if (event.target == modal) {
        closeModal();
    }
};

// iOS detection helper
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Vanta effect: tweak for iOS
if (isIOS()) {
    // Reduce Vanta birds for performance on iOS
    initVanta(1);
    setTimeout(() => {
        const bg = document.getElementById("vanta-bg");
        if (bg) bg.style.opacity = "0.3";
    }, 13500);
}

// Prevent double-tap zoom on buttons/links (optional, for iOS)
document.querySelectorAll("button, .btn, a").forEach(function (el) {
    el.addEventListener(
        "touchstart",
        function (e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        },
        { passive: false }
    );
});

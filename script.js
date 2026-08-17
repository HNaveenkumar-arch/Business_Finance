document.addEventListener("DOMContentLoaded", () => {


    const tl = gsap.timeline();

    tl.from(".logo", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    })
        .from(".nav-links li", {
            y: -15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.3")
        .from(".nav-actions", {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.4");



    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const body = document.body;

    mobileToggle.addEventListener("click", () => {
        const isActive = navMenu.classList.contains("active");

        if (!isActive) {
            navMenu.classList.add("active");
            body.classList.add("no-scroll"); 
            mobileToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 


            gsap.fromTo(".nav-links li",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.1 }
            );
            gsap.fromTo(".nav-actions",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.3 }
            );
        } else {
            navMenu.classList.remove("active");
            body.classList.remove("no-scroll"); 
            mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
        }
    });


    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const searchError = document.getElementById("searchError");


    searchIcon.addEventListener("click", () => {
        if (searchInput.value.trim() === "") {
            searchError.style.display = "block";


            gsap.fromTo(searchError,
                { x: -5 },
                { x: 5, duration: 0.1, yoyo: true, repeat: 3, ease: "linear" }
            );
        } else {
            searchError.style.display = "none";
            window.location.href = '404page.html'

            console.log("Searching for:", searchInput.value);

        }
    });


    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() !== "") {
            searchError.style.display = "none";
        }
    });
});






gsap.from(".footer-container > *", {
    scrollTrigger: {
        trigger: ".footer-section",
        start: "top 90%", 
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1, 
    ease: "power2.out"
});
/* ==========================================
   ASMITHA PORTFOLIO JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       MOBILE MENU
       ========================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    /* ==========================
       CLOSE MOBILE MENU
       ========================== */

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* ==========================
       NAVBAR SCROLL EFFECT
       ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ==========================
       ACTIVE NAVIGATION
       ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navItems.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    /* ==========================
       SCROLL REVEAL
       ========================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .skill-box, .project-card, .timeline-item, .cert-card, .stat"
    );

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform = "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


    /* ==========================
       CURRENT YEAR
       ========================== */

    document.getElementById("year").textContent =
        new Date().getFullYear();


    /* ==========================
       IMAGE TILT EFFECT
       ========================== */

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage && window.innerWidth > 900) {

        heroImage.addEventListener("mousemove", function (event) {

            const rect = heroImage.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateX = (y - 0.5) * -8;
            const rotateY = (x - 0.5) * 8;

            heroImage.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        heroImage.addEventListener("mouseleave", function () {

            heroImage.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        });

    }

});
export function initMobileMenu() {
    const menuToggle = document.getElementById("mobileMenuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.classList.toggle("open", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Stäng meny" : "Öppna meny"
        );
    });

    navLinks.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }


        closeMenu();
    });


    function closeMenu() {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Öppna meny"
        );
    }
}